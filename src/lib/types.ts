import type { options } from "$lib/constants"

export type Hints = {
	x: Record<number, number[]>,
	y: Record<number, number[]>
}
  
export type Option = typeof options[number]['name']

export type UpdateFunction = Event & {
	currentTarget: EventTarget & HTMLInputElement;
}