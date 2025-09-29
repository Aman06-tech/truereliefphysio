# Contributing to True Relief Physio

We welcome contributions to True Relief Physio! This document provides guidelines for contributing to this healthcare platform.

## 🤝 How to Contribute

### Reporting Issues

1. **Check existing issues** first to avoid duplicates
2. **Use issue templates** when available
3. **Provide clear descriptions** with steps to reproduce
4. **Include relevant information**:
   - Operating system
   - Browser version (for frontend issues)
   - Python version (for backend issues)
   - Node.js version (for frontend issues)

### Submitting Pull Requests

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes**
4. **Test your changes thoroughly**
5. **Follow code style guidelines**
6. **Write clear commit messages**
7. **Submit a pull request**

## 📝 Code Style Guidelines

### Python/Django Backend

- Follow **PEP 8** coding standards
- Use **type hints** where appropriate
- Write **docstrings** for functions and classes
- Use **descriptive variable names**
- Keep functions **small and focused**

```python
def create_appointment(data: dict) -> Appointment:
    """
    Create a new appointment with validation.

    Args:
        data (dict): Appointment data including patient info

    Returns:
        Appointment: Created appointment instance
    """
    # Implementation here
```

### TypeScript/React Frontend

- Use **TypeScript** for all new components
- Follow **React best practices**
- Use **functional components** with hooks
- Implement **proper error handling**
- Use **meaningful component names**

```tsx
interface AppointmentProps {
  appointment: Appointment;
  onStatusUpdate: (id: number, status: string) => void;
}

const AppointmentCard: React.FC<AppointmentProps> = ({
  appointment,
  onStatusUpdate
}) => {
  // Component implementation
};
```

### CSS/Tailwind

- Use **Tailwind CSS classes** consistently
- Follow **mobile-first** responsive design
- Use **semantic class names**
- Group related classes logically

```tsx
<div className="
  bg-white dark:bg-gray-800
  rounded-xl shadow-sm
  border border-gray-200 dark:border-gray-700
  p-6 hover:shadow-lg
  transition-all duration-300
">
```

## 🧪 Testing Guidelines

### Backend Testing

- Write **unit tests** for models and views
- Use **Django's testing framework**
- Test **API endpoints** thoroughly
- Include **edge cases** in tests

```python
from django.test import TestCase
from .models import Appointment

class AppointmentModelTest(TestCase):
    def test_appointment_creation(self):
        # Test implementation
        pass
```

### Frontend Testing

- Write **component tests** using Jest/React Testing Library
- Test **user interactions**
- Mock **API calls** in tests
- Test **responsive behavior**

## 📋 Commit Message Format

Use clear and descriptive commit messages:

```
<type>(<scope>): <description>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(booking): add email notification for appointments

- Implement email sending on appointment creation
- Add email templates for patient and admin
- Configure SMTP settings for production

Fixes #123
```

## 🔄 Development Workflow

1. **Set up development environment**:
   ```bash
   # Backend
   python -m venv venv
   source venv/bin/activate  # or venv\Scripts\activate on Windows
   pip install -r requirements.txt
   python manage.py migrate

   # Frontend
   cd true-relief-physio
   npm install
   npm run dev
   ```

2. **Create feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make changes and test**
4. **Commit with clear messages**
5. **Push and create pull request**

## 🚀 Pull Request Process

1. **Update documentation** if needed
2. **Add tests** for new functionality
3. **Ensure all tests pass**
4. **Update the README.md** if necessary
5. **Request review** from maintainers

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Tests added/updated
```

## 🎯 Feature Requests

When suggesting new features:

1. **Check existing issues** and discussions
2. **Provide clear use case** and benefits
3. **Consider healthcare regulations** and privacy
4. **Think about user experience**
5. **Consider technical feasibility**

## 🔒 Security Considerations

- **Never commit sensitive data** (API keys, passwords, etc.)
- **Follow OWASP guidelines** for web security
- **Validate all user inputs**
- **Use proper authentication** and authorization
- **Consider patient data privacy** (HIPAA compliance)

## 📞 Healthcare-Specific Guidelines

Since this is a healthcare platform:

1. **Patient Privacy**: Ensure all patient data is handled securely
2. **Accuracy**: Medical information must be accurate and verified
3. **Accessibility**: Follow WCAG guidelines for accessibility
4. **Compliance**: Consider healthcare regulations in your region

## 🆘 Getting Help

- **Create an issue** for questions
- **Check documentation** first
- **Join discussions** in existing issues
- **Contact maintainers** for urgent matters

## 📄 Code of Conduct

- Be **respectful** and **inclusive**
- **Help others** learn and grow
- **Focus on constructive feedback**
- **Consider healthcare ethics** in discussions

## 🙏 Recognition

Contributors will be recognized in:
- GitHub contributors list
- Release notes for significant contributions
- Project documentation

Thank you for contributing to True Relief Physio! Your help makes healthcare more accessible. 🏥❤️