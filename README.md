# PetMe Project

Welcome to the PetMe Project! This project is a Django-based web application for managing pet-related information and services.

## Commands to Set Up the Project

### 1. Clone the Repository

git clone https://github.com/Lex-Ashu/petme.git

cd petme

### 2. Create a Virtual Environment

python -m venv venv

source venv/bin/activate 

### 3. Install Dependencies

pip install -r requirements.txt

### 4. Install PostgreSQL

#### On macOS using Homebrew:

brew install postgresql

brew services start postgresql


### 5. Configure PostgreSQL

1. **Access PostgreSQL CLI:**

   psql postgres

2. **Create a New Role:**

   CREATE ROLE ashu WITH LOGIN PASSWORD 'ashu';

3. **Create a New Database:**

   CREATE DATABASE petme_db;

4. **Grant Privileges to the Role:**

   GRANT ALL PRIVILEGES ON DATABASE petme_db TO ashu;

5. **Exit PostgreSQL CLI:**

   \q

### 6. Apply Migrations

python manage.py migrate

### 7. Create Superuser

python manage.py createsuperuser

### 8. Run the Development Server

python manage.py runserver

## Common Git Commands

### `git status`

Displays the state of the working directory and the staging area. It shows which changes have been staged, which haven't, and which files aren't being tracked by Git.

```
git status
```

### `git add <file>`

Adds file contents to the staging area. You can use `.` to add all changed files.

```
git add <file>
# or to add all files
git add .
```

### `git commit -m "commit message"`

Records changes to the repository with a message describing what was changed.

```
git commit -m "commit message"
```

### `git commit --amend`

Amends the previous commit. This is useful for combining staged changes with the previous commit instead of creating a new one.

```
git commit --amend
```

### `git pull origin <branch>`

Fetches and integrates with another repository or a local branch. This is useful for updating your local branch with changes made by others.

```
git pull origin <branch>
```

### `git log`

Shows the commit logs. You can see the history of commits in the repository.

```
git log
```

## License

This project is licensed under the MIT License.
