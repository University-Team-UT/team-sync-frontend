export type TripleExclusiveProps<A, B, C> =
	| (A & { [K in keyof (B & C)]?: never })
	| (B & { [K in keyof (A & C)]?: never })
	| (C & { [K in keyof (A & B)]?: never })
