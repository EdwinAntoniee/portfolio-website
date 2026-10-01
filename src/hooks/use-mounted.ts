import { useSyncExternalStore } from "react"

const subscribe = () => () => {}

/**
 * `false` during SSR and the hydration pass, `true` afterwards.
 * Replaces the `useEffect(() => setMounted(true), [])` pattern without
 * triggering an extra cascading render.
 */
export function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )
}
