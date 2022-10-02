import { useEffect, EffectCallback, DependencyList, useRef } from "react";

/**
 * This hook gets called only when the dependencies change but not during initial render.
 *
 * @param {EffectCallback} effect The `useEffect` callback function.
 * @param {DependencyList} deps An array of dependencies.
 *
 * @example
 * ```
 *  useDidMountEffect(()=>{
 *      alert("Dependency changed!");
 * },[dependency]);
 * ```
 */
export const useDidMountEffect = (
	effect: EffectCallback,
	deps?: DependencyList
) => {
	const initialRender = useRef(true);

	useEffect(() => {
		let effectReturns: void | (() => void) = () => {};

		if (initialRender.current) {
			initialRender.current = false;
		} else {
			effectReturns = effect();
		}

		if (effectReturns && typeof effectReturns === "function") {
			return effectReturns;
		}
		// eslint-disable-next-line
	}, deps);
};
