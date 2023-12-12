export type Modify<T, R> = Omit<T, keyof R> & R

export interface IStatefulAtom<T> {
  value: T
  onChange: (value: T) => void
}

export type TLoadingState = "idle" | "pending" | "failed"
