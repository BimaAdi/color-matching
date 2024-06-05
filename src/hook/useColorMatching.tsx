"use client";

import { useEffect, useState } from "react";

const shuffle = (array: string[]): string[] => {
	let currentIndex = array.length;

	// While there remain elements to shuffle...
	while (currentIndex != 0) {
		// Pick a remaining element...
		let randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}
	return array;
};

const countNumCorrectOrder = (
	guess: string[],
	correctAnswer: string[],
): number => {
	let numCorrectOrder = 0;
	for (let i = 0; i < guess.length; i++) {
		if (guess[i] === correctAnswer[i]) {
			numCorrectOrder++;
		}
	}
	return numCorrectOrder;
};

export default function useColorMatching() {
	const [row, setRow] = useState(["red", "blue", "yellow", "orange", "green"]);
	const [correctAnswer, setCorrectAnswer] = useState<string[]>([]);
	const [guessHistory, setGuessHistory] = useState<
		{
			guessNum: number;
			row: string[];
			numCorrectOrder: number;
		}[]
	>([]);

	useEffect(() => {
		generateAnswer();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const generateAnswer = () => {
		setCorrectAnswer(shuffle([...row]));
	};

	const swap = (itemA: string, itemB: string) => {
		if (itemA === itemB) {
			return;
		}
		const indexA = row.indexOf(itemA);
		const indexB = row.indexOf(itemB);
		row[indexA] = itemB;
		row[indexB] = itemA;
		setRow([...row]);
	};

	const guessAnswer = () => {
		const guessNum = guessHistory.length + 1;
		const numCorrectOrder = countNumCorrectOrder(row, correctAnswer);
		setGuessHistory([
			{
				guessNum: guessNum,
				row: [...row],
				numCorrectOrder: numCorrectOrder,
			},
			...guessHistory,
		]);
	};

    const reset = () => {
        generateAnswer();
        setGuessHistory([]);
        setRow(["red", "blue", "yellow", "orange", "green"])
    }

	return { row, guessHistory, swap, guessAnswer, reset };
}
