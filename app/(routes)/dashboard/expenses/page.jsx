'use client';

import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { db } from '../../../../utils/dbConfig';
import { desc, eq } from 'drizzle-orm';
import { Budgets, Expenses } from '../../../../utils/schema';
import ExpenseListTable from './_components/ExpenseListTable';

function ExpensesPage() {
    const { user } = useUser();
    const [expensesList, setExpensesList] = useState([]);

    useEffect(() => {
        user && getAllExpenses();
    }, [user]);

    const getAllExpenses = async () => {
        const result = await db.select({
            id: Expenses.id,
            name: Expenses.name,
            amount: Expenses.amount,
            createdAt: Expenses.createdAt
        }).from(Budgets)
        .rightJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
        .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(Expenses.id));

        setExpensesList(result);
    };

    return (
        <div className='p-10'>
            <h2 className='font-bold text-3xl'>My Expenses</h2>
            <ExpenseListTable
                expensesList={expensesList}
                refreshData={() => getAllExpenses()}
            />
        </div>
    );
}

export default ExpensesPage;
