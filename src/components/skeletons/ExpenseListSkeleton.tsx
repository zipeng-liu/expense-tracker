export default function ExpenseListSkeleton() {
  return (
    <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md">
      <div className="animate-pulse space-y-6">
        <div className="h-6 bg-gray-300 dark:bg-gray-700 w-1/3 rounded-lg"></div>
        <div className="space-y-4">
          <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
          <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
          <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
