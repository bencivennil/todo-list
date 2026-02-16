import { Todo } from '@/types/todo';
import { NextResponse } from 'next/server';

const _sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export async function GET() {
  try {

    await _sleep(1000);

    const todos: Todo[] = [
        { id: 1, title: "Task 1", completed: false, category: "work" },
        { id: 2, title: "Task 2", completed: true, category: "personal" },
        { id: 3, title: "Task 3", completed: false, category: "work" },
        { id: 4, title: "Task 4", completed: false, category: "work" },
        { id: 5, title: "Task 5", completed: false, category: "personal" },
        { id: 6, title: "Task 6", completed: false, category: "personal" },
        { id: 7, title: "Task 7", completed: false, category: "personal" },
        { id: 8, title: "Task 8", completed: false, category: "work" },
        { id: 9, title: "Task 9", completed: false, category: "work" },
        { id: 10, title: "Task 10", completed: false, category: "work" },
        { id: 11, title: "Task 11", completed: false, category: "personal" },
        { id: 12, title: "Task 12", completed: false, category: "work" },
    ]

    return NextResponse.json(todos)
  } catch (error) {
    console.error('Error fetching:', error)
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 })
  }
}
