# Payflip Platform
## Description
This repository is associated with the Payflip platform that is part of the International Blended Mobility Project. 

## Code Rules
### Naming Convention
<p>For this project we use the following Naming Conventions:</p>

- Classes/Methods: PascalCase (e.g. InputProcessor, BelgianBenefit...) 
- Interfaces: PascalCase and I in front of the word (IProcessor, IBenefit...)
- Variables/Attributes: camelCase (e.g. firstName, userInput...)
- Constants: UPPERCASE (e.g. BELGIANTAX, MINIMUMTAX...)

### Noisy Words
<p>Try to avoid following words in names/variables, as they do not provide additional information and therefore are not useful:

- The (prefix)
- Info
- Data
- Variable
- Object
- Manager

### As less directly checked numbers as possible
<p>When using numbers in the code (especially in while and for loops, and if-statements), try to assign them first to a variable or constant, and use this variable instead. This makes it easier to change the code if necessary (because we just have to change the value of the variable)</p>
<p>Example below might make this clearer:</p>

```
Bad:
if (student.classes.length < 7) {
   // Do something
}

Good:
const MAX_CLASSES_PER_STUDENT: Number = 7
if (student.classes.length < MAX_CLASSES_PER_STUDENT) {
    // Do something
}
```
### Functions (= Methods)
- Max. around 20 lines (if longer we can try to split the function into smaller functions)
- Single Responsiblity Principle, functions mostly have one purpose (but in some occasions it can happen that it's responsible for multiple things, which is totally fine then :-) )
- When a certain condition appears in multiple functions, it should be extracted and be put into it's own function so that the others can you use by the function name -> Code Reusability

### Commenting
<p>When a name of a Class, Method, etc. speaks for itself, it's not necessary to comment it.</p>
<p>When we do some commenting, we can follow the following guidelines:</p>

- Always Block Comments (/* and */) above the Class/Method in question
- Description of the Method/Class
- Explanation of the parameters (if present)

### Classes
- Always Getter & Setters
- Try to make attributes private (besides when it's really helpful to have it public and it won't break the code when the values are changed from other classes)
