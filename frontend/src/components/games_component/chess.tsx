'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Chess } from 'chess.js'
import { Chessground } from 'chessground'

const ChessComponent = () => {
    const BoardRef = useRef<HTMLDivElement | null>(null)
    const GameRef = useRef(new Chess())
    const GroundRef = useRef<any>(null)

    useEffect(() => {
        if(BoardRef.current){
            const config = {
                fen: GameRef.current.fen(),
                turnColor: 'white',
                movable: {
                    free: false,
                    color: 'white',
                    dests: getDests(GameRef.current),
                    events: {
                        after: (from: string, to: string) => {
                            GameRef.current.move({ from, to, promotion: 'q' })
                            GroundRef.current?.set({
                                fen: GameRef.current.fen(),
                                turnColor: GameRef.current.turn() === 'w' ? 'white' : 'black',
                                movable: {
                                color: GameRef.current.turn() === 'w' ? 'white' : 'black',
                                dests: getDests(GameRef.current)
                                }
                            })
                        }
                    }
                }
            }
            GroundRef.current = Chessground(BoardRef.current, config)
        }
    })

    return (
        <div className='flex items-center justify-center w-screen h-screen'>
            <div ref={BoardRef} className="cg-board w-[400px] h-[400px]" />
        </div>
    )
}

export default ChessComponent

 function getDests(game: Chess) {
    const dests = new Map()
    game.SQUARES.forEach((s: any) => {
        const moves = game.moves({ square: s, verbose: true })
        if (moves.length) dests.set(s, moves.map((m: any) => m.to))
    })
    return dests
}