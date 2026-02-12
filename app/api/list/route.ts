import { Todo } from '@/types/todo';
import { NextResponse } from 'next/server';

const _sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export async function GET() {
  try {
    
    await _sleep(3000);

    const todos: Todo[] = [
        { id: 1, title: "Task 1", completed: false, category: "work" },
        { id: 2, title: "Task 2", completed: true, category: "personal" },
        { id: 3, title: "Task 3", completed: false, category: "work" }
    ]

    return NextResponse.json(todos)
  } catch (error) {
    console.error('Error fetching:', error)
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 })
  }
}