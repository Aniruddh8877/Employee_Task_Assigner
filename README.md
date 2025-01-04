# Employee Task Assigner

This project is a task management system where an admin can assign tasks to employees. Each employee has a predefined set of tasks with their status, and the admin can view and manage these tasks. The tasks are categorized into different types such as "Design," "Development," "Meeting," etc. This application stores employee and admin data in `localStorage` for easy access.

## Features

- **Employee Management:**
  - Each employee has a list of tasks, with task details like title, description, date, category, and status.
  - Employees can have tasks that are marked as "active," "completed," or "failed."
  - The task count for each employee is tracked (active, new, completed, failed).

- **Admin Management:**
  - Admin has access to all employee data.
  - Admin can view the tasks and task counts for each employee.

- **Predefined Users:**
  - **Employees:**
    - Five employees with predefined task data.
  - **Admin:**
    - One admin with access to manage employee data.

## Local Storage

The following data is stored in the browser's `localStorage` for persistence:

- **Employees:** A list of employee objects, each containing their tasks and task counts.
- **Admin:** A list of admin users with credentials for login.

## Predefined Email and Password

### Admin
- **Email:** `admin@example.com`
- **Password:** `123`

### Employees

1. **Arjun**
   - **Email:** `e@e.com`
   - **Password:** `123`
   
2. **Sneha**
   - **Email:** `employee2@example.com`
   - **Password:** `123`

3. **Ravi**
   - **Email:** `employee3@example.com`
   - **Password:** `123`

4. **Priya**
   - **Email:** `employee4@example.com`
   - **Password:** `123`

5. **Karan**
   - **Email:** `employee5@example.com`
   - **Password:** `123`

## Functions

### `setLocalStorage()`
This function saves the employee and admin data into `localStorage`:

```js
localStorage.setItem('employees', JSON.stringify(employees));
localStorage.setItem('admin', JSON.stringify(admin)); js
```

- **Setup:**
  - **Clone or downloand the repository**
    - ```git
       git clone https://github.com/Aniruddh8877/Employee_Task_Assigner.git
  - **Open:**
    - open the project in your preferred code editor.
  - **localStorage:**
    - make sure the browser supporrt `localStorage`.
