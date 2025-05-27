This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

✅ Summary of Tasks Completed

🧹 Task 1: Code Cleanup – "Fix This Component"

        Modular API Handling:
        Created an api/ folder to separate API calls, promoting clean code and making it easier to debug or scale with additional endpoints.

        Reusable Table Component:
        Built a generic table component to uniformly display data across the app. This ensures a consistent UI and minimizes design inconsistencies.

        Cleaned useEffect Hook:
        Refactored the component by calling the API function directly in useEffect, reducing clutter and improving readability.

🔍 Task 2: Data List with Search

        Real-Time Filtering with onKeyUp:
        Used onKeyUp for real-time data filtering without useEffect.
        Since the data is static, there's no need for asynchronous side effects, making this a lightweight and efficient approach.

⏱️ Task 3: Simple Countdown Timer

        State Management with useState & useRef:

        count: Tracks remaining time.

        isRunning: Indicates if the timer is active.

        useRef: Stores the interval reference to enable clearing.

        Logic Overview:

        useEffect listens for changes and decrements count if isRunning is true.

        Once count hits 0, the timer stops and displays "DONE!!!".

        The Start button triggers the countdown only if isRunning is false and count > 0.

        The Reset button sets count back to 10 and stops the timer.

📁 Additional Improvements

    Constants Folder:
    Created a constants/ folder to store static data like users and routes.

    Dynamic Navigation:
    Routes are defined centrally for cleaner and easier navigation across task pages.
