# Spent app - expense tracker

### Expense tracker in the works
![image](https://github.com/user-attachments/assets/66248c78-2cb8-442c-a656-d9af9cf7349a)
![image](https://github.com/user-attachments/assets/56417aff-2e55-46fe-8ac4-993698f52392)



### Technologies
- JavaScript
- TypeScript
- React
- SQLite3
- Tailwind CSS

### Current features:
- Add expense using a form and saving data into a database (SQLite3)
- View the list of expenses on a separate page

### Additional features to add 
- Make the app live
- Add auth0 to allow secure user experience - sign up with your email and access your expenses
- Select and view expenses based on a timeframe (eg view expenses by month)
- Visualise expenses based on categories and or months with graphs and pie graphs

## Setup
#### **From the command line**

```
git clone https://github.com/sarah-situ/spent
cd spent
npm install # to install dependencies
npm run knex migrate:latest # run migrations for database
npm run knex seed:run # run seeds for database
npm run dev # to start the dev server
```

You can find the server running on [http://localhost:3000](http://localhost:3000) and the client running on [http://localhost:5173](http://localhost:5173).

