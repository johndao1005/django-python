# django-python

- [ ] Set up virtual env and active
Install Django


``` bash
python -m venv django

django/Scripts/activate

pip install -e django
```

To deactivate virtual env

```bash
django/Scripts/deactivate
```

- [ ] Create first project

```bash
django-admin startproject mysite
```

- [ ] Run your project. You need to be in the project folder to run below command

```bash
py manage.py runserver <optional - add port number like 8080 or 0.0.0.0:8080>
```

- [ ] Run 

```bash
py manage.py runserver
```

# Database

# Start

## Backend

1. Start virtual env
    `django/Scripts/activate`
2. Start the server
    `cd backend`
    `py manage.py runserver`
3. 


## Frontend

Suggestions for further improvement:

- Error Handling: Consider how to handle cases where the auth state might be in an loading or error state.
- Redirect Logic: You might want to add logic to redirect to a specific page after login (e.g., the last attempted page).
- Logout Functionality: Ensure there's a mechanism to log out and redirect to the public area.
- Route Guards: While the FunctionGroup component acts as a guard, consider implementing more granular route guards if different routes require different levels of authentication or permissions.
- Loading State: Add a loading state while checking for authentication to improve user experience.
- Type Safety: Ensure you're using TypeScript effectively throughout, especially for state and props.