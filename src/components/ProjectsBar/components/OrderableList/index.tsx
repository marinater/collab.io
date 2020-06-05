import React from 'react'
import { useEffect, useState, useRef } from "react"
import { motion, useMotionValue } from "framer-motion"
import { findIndex, Position } from "./findIndex"

const move = (arr: any[], initial: number, target: number) => {
	const out = []

	for (let i = 0; i < arr.length; i++) {
		if (i === initial)
			continue

		if (out.length === target)
			out.push(arr[initial])
		out.push(arr[i])
	}
	if (out.length === target)
		out.push(arr[initial])

	return out
}

const Item: React.FC<{ data: any, render: any, setPosition: any, moveItem: any, i: number}> = ({ render, data, setPosition, moveItem, i }) => {
	const [isDragging, setDragging] = useState(false);
  
	const ref = useRef(null);

	const dragOriginY = useMotionValue(0);

	useEffect(() => {
	  setPosition(i, {
		//@ts-ignore
		height: ref.current.offsetHeight,
		//@ts-ignore
		top: ref.current.offsetTop
	  })
	})

	return (
		<motion.div
			ref={ref}
			initial={false}
			style={{ position: 'relative'}}
			animate={isDragging ? onTop : flat}
			// whileHover={{ scale: 1.03 }}
			whileTap={{ scale: 1.12 }}
			drag="y"
			dragOriginY={dragOriginY}
			dragConstraints={{ top: 0, bottom: 0 }}
			dragElastic={1}
			onDragStart={() => setDragging(true)}
			onDragEnd={() => setDragging(false)}
			onDrag={(e, { point }) => moveItem(i, point.y)}
			positionTransition={({ delta }) => {
				if (isDragging) {
					dragOriginY.set(dragOriginY.get() + delta.y);
				}

				return !isDragging;
			}}
		>
			{render(data)}
		</motion.div>
	)
}

interface OrderableListProps<T> {
	data: T[],
	render: (props: T) => React.ReactNode
}

export function OrderableList<T>(props: OrderableListProps<T>) {
	const [data, setData] = useState(props.data);

	const positions = useRef<Position[]>([]).current;
	const setPosition = (i: number, offset: Position) => (positions[i] = offset);
  
	const moveItem = (i: number, dragOffset: number) => {
		const targetIndex = findIndex(i, dragOffset, positions);
		if (targetIndex !== i) setData(move(data, i, targetIndex));
	}
	return (
		<div style={{ width: '100%', height: '100%' }}>
		{
			data.map((item, index) => (
				<Item
					// @ts-ignore
					key={item.key}
					i={index}
					setPosition={setPosition}
					moveItem={moveItem}
					render={props.render}
					data={item}
				/>
			))
		}
	  </div>
	)
}

const onTop = {
	zIndex: 10 };
const flat = {
	zIndex: 0,
}