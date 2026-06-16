---
title: Markdown Test
date: 2026-05-08
categories: ["Web Development"]
tags: ["Markdown"]
draft: true
---

# Comprehensive Markdown Feature Guide: CommonMark + GFM + Extensions

A single reference document covering CommonMark, GitHub Flavored Markdown (GFM), definition lists, and footnotes.

---

## Table of Contents

- [Headings](#headings)
- [Paragraphs and Line Breaks](#paragraphs-and-line-breaks)
- [Text Formatting](#text-formatting)
- [Blockquotes](#blockquotes)
- [Lists](#lists)
- [Code](#code)
- [Horizontal Rules](#horizontal-rules)
- [Links](#links)
- [Images](#images)
- [Tables (GFM)](#tables-gfm)
- [Task Lists (GFM)](#task-lists-gfm)
- [Strikethrough (GFM)](#strikethrough-gfm)
- [Autolinks (GFM)](#autolinks-gfm)
- [Definition Lists](#definition-lists)
- [Footnotes](#footnotes)
- [HTML](#html)
- [Escaping Characters](#escaping-characters)
- [Entity References](#entity-references)
- [Combined Examples](#combined-examples)

---

## Headings

# Heading level 1

## Heading level 2

### Heading level 3

#### Heading level 4

##### Heading level 5

###### Heading level 6

Alternative Setext syntax for h1 and h2:

# Heading level 1

## Heading level 2

---

## Paragraphs and Line Breaks

This is a paragraph. It can span multiple lines in the source, but will be rendered as a single block of text until a blank line separates it.

This is a new paragraph separated by a blank line.

For a line break within a paragraph,  
add two or more spaces at the end of a line, then press Return.

Or use a backslash for a hard line break:\
Like this.

---

## Text Formatting

### Bold

**This text is bold** using asterisks.  
**This is also bold** using underscores.

### Italic

_This text is italic_ using asterisks.  
_This is also italic_ using underscores.

### Bold and Italic Combined

**_This is bold and italic_**  
**_This is also bold and italic_**  
**_Bold and italic_**  
_**Bold and italic**_

### Strikethrough (GFM)

~~This text is struck through~~  
**~~Bold and strikethrough~~**  
_~~Italic strikethrough~~_

---

## Blockquotes

> This is a simple blockquote.

> This is a blockquote
> spanning multiple lines.

> Blockquotes can also contain
>
> > Nested blockquotes
>
> Back to the first level.

> #### Blockquotes with other elements
>
> - They can contain lists
> - Like this item
>
> And **formatted text** and `code`.

---

## Lists

### Unordered Lists

- Item using asterisk
- Another item
  - Nested item
    - Double nested item
- Back to top level

* Item using hyphen
* Another item
  - Nested hyphen item

- Item using plus sign
- Another item

### Ordered Lists

1. First item
2. Second item
3. Third item
   1. Nested item
   2. Another nested item
4. Fourth item

### Starting with a Different Number

57. This list starts at 57
58. And continues

### Mixed Content in Lists

1. First item with **bold text**
2. Second item

   With a paragraph inside the list item (indented).

3. Third item

   > With a blockquote inside
   > the list item

4. Fourth item with code:
   ```python
   print("Hello, World!")
   ```

### Task Lists (GFM)

- [x] Completed task
- [ ] Incomplete task
- [ ] Task with **formatting**
- [x] Task with `code`
- [ ] Nested incomplete
  - [x] Nested complete
  - [ ] Nested incomplete

---

## Code

### Inline Code

Use backticks for `inline code`.  
To include backticks inside: ``Use `double` backticks``.

### Indented Code Blocks

    This is an indented code block
    created by indenting 4 spaces
    or one tab.

    def hello():
        print("Hello")

### Fenced Code Blocks (GFM)

```python
def greet(name):
    """A greeting function."""
    return f"Hello, {name}!"

# Call the function
print(greet("World"))
```

```javascript
const greeting = (name) => {
  return `Hello, ${name}!`;
};

console.log(greeting("World"));
```

```bash
# Shell script example
echo "Hello, World!"
ls -la
```

```json
{
  "name": "John Doe",
  "age": 30,
  "isActive": true
}
```

No language specified:

```
This is a code block without language specification.
```

### Syntax Highlighting (GFM)

```diff
- const oldCode = "This is removed";
+ const newCode = "This is added";
  const unchanged = "This stays the same";
```

---

## Horizontal Rules

Three or more hyphens:

---

Three or more asterisks:

---

Three or more underscores:

---

---

## Links

### Inline Links

[GitHub](https://github.com) is where code lives.

[Link with title](https://github.com "GitHub Homepage")

### Reference-style Links

[Example reference][reference]

[reference]: https://example.com "Example Website"
[Another reference]: https://github.com "GitHub"

[Reference link with same text][]

[Reference link with same text]: https://example.com

### Autolinks (GFM)

https://www.github.com automatically becomes a link.

user@example.com automatically becomes a mailto link.

<https://www.example.com>  
<user@example.com>

### Links with Formatting

**[bold link](https://example.com)**  
_[italic link](https://example.com)_  
[`code link`](https://example.com)

---

## Images

### Inline Images

![Placeholder Image](https://via.placeholder.com/150 "Image Title")

### Reference-style Images

![Image reference][image-ref]

[image-ref]: https://via.placeholder.com/150 "Reference Image"

### Linked Images

[![Clickable image](https://via.placeholder.com/100)](https://example.com)

---

## Tables (GFM)

### Simple Table

| Column 1 | Column 2 | Column 3  |
| -------- | -------- | --------- |
| Row 1    | Data     | More data |
| Row 2    | Cell     | Another   |

### Table with Alignment

| Left-aligned | Center-aligned | Right-aligned |
| :----------- | :------------: | ------------: |
| Left         |     Center     |         Right |
| `code`       |    **bold**    |      _italic_ |

### Table with Mixed Content

| Feature | Syntax        | Example                     |
| ------- | ------------- | --------------------------- |
| Bold    | `**text**`    | **Bold text**               |
| Italic  | `*text*`      | _Italic text_               |
| Code    | `` `code` ``  | `inline code`               |
| Links   | `[text](url)` | [Link](https://example.com) |

### Minimal Table Syntax (GFM)

| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |

---

## Definition Lists

Some Markdown processors support definition lists using `:` syntax:

Term 1
: Definition of term 1

Term 2
: First definition of term 2
: Second definition of term 2

**HTML** _(HyperText Markup Language)_
: The standard markup language for documents designed to be displayed in a web browser.
: It defines the meaning and structure of web content.

**CSS** _(Cascading Style Sheets)_
: A style sheet language used for describing the presentation of a document written in HTML.

**JavaScript**
: A programming language that conforms to the ECMAScript specification.
: JavaScript is high-level, often just-in-time compiled, and multi-paradigm.

### Alternative Definition List Syntax (`=`)

= Term 1
Definition of term 1

= Term 2
Definition of term 2
Additional definition

---

## Footnotes

Here is a sentence with a footnote[^1].

[^1]:
    This is the first footnote. It can contain **formatting**, `code`, and even multiple paragraphs.

    This is the second paragraph of the footnote, indented to be part of the same footnote.

Here is another footnote reference[^longnote].

[^longnote]: Here's a longer footnote with various elements:

    ```javascript
    console.log("Code in a footnote!");
    ```

    - List items in footnotes
    - Another list item

    > Even blockquotes work in footnotes.

Multiple references to the same footnote[^1] can appear throughout the text[^1].

Inline footnote definition example[^inline].

[^inline]: A short footnote definition.

Footnotes can be defined anywhere[^anywhere].

[^anywhere]: This footnote definition appears after its reference, which is fine in most processors.

---

## HTML

### Inline HTML

This <em>word</em> is emphasized using HTML.  
This <strong>word</strong> is bold using HTML.  
This has a <span style="color: red;">red word</span> using inline CSS.

### Block HTML

<div style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;">

#### HTML Block with Markdown

Inside an HTML block, Markdown may or may not be processed, depending on the implementation.

- This list may not render as Markdown inside the div
- In some processors, it will render correctly

</div>

### Collapsible Sections (HTML)

<details>
<summary>Click to expand</summary>

Content that was hidden is now visible.

```markdown
This code block is inside a collapsible section.
```

</details>

### Subscript and Superscript (Via HTML)

H<sub>2</sub>O is water.  
E = mc<sup>2</sup> is Einstein's equation.  
The 1<sup>st</sup> day of 1<sup>st</sup> grade.

---

## Escaping Characters

Backslashes escape the following characters:

\* asterisk  
\_ underscore  
\{ curly braces  
\} curly braces  
\[ square brackets  
\] square brackets  
\( parentheses  
\) parentheses  
\# hash mark  
\+ plus sign  
\- minus sign (hyphen)  
\. dot  
\! exclamation mark  
\` backtick  
\| pipe

Escape a literal backslash: \\\\

---

## Entity References

&copy; Copyright symbol  
&trade; Trademark symbol  
&reg; Registered symbol  
&amp; Ampersand  
&lt; Less than  
&gt; Greater than  
&quot; Double quote  
&apos; Apostrophe

Emoji using entity references (if supported):  
&#x1F600; &#x1F601; &#x1F44D;

---

## Combined Examples

### Blockquote with a Table

> | Product | Price |
> | ------- | ----- |
> | Alpha   | $10   |
> | Beta    | $15   |

### Task List in a Blockquote

> - [x] Plan the project
> - [ ] Start development
> - [ ] Write documentation

### Code in a Footnote

Example text with code footnote[^codefn].

[^codefn]:
    ```python
    def hello():
        print("Hello from a footnote!")
    ```

### Table with Task Lists and Strikethrough

| Task         | Status        | Priority     |
| ------------ | ------------- | ------------ |
| Write docs   | - [x] Done    | ~~Low~~      |
| Review code  | - [ ] Pending | High         |
| ~~Old task~~ | ~~Removed~~   | N/A          |
| Deploy       | - [ ] Todo    | **Critical** |

### Nested Lists with Different Markers

- Level 1 - asterisk
  - Level 2 - plus
    - Level 3 - hyphen
      1. Level 4 - number
         1. Level 5 - nested number

### Code Blocks Within Lists

1. First, initialize the project:

   ```
   mkdir my-project
   cd my-project
   npm init -y
   ```

2. Then, install dependencies:

   ```bash
   npm install express
   npm install --save-dev nodemon
   ```

3. Create the main file:

   ```javascript
   const express = require("express");
   const app = express();

   app.get("/", (req, res) => {
     res.send("Hello World!");
   });

   app.listen(3000);
   ```

### Backslash at End of Line

This line ends with a backslash\\
And this line continues it.

### Literal Characters After Escaping

\*literal asterisks\*  
\_literal underscores\_  
\# not a heading  
\`not code\`  
\[not a link\]

---

## Feature Compatibility Summary

| Feature Category | Feature             | CommonMark | GFM | This Doc |
| ---------------- | ------------------- | ---------- | --- | -------- |
| Headings         | ATX (`#`)           | ✓          | ✓   | ✓        |
| Headings         | Setext (`===`)      | ✓          | ✓   | ✓        |
| Formatting       | Bold                | ✓          | ✓   | ✓        |
| Formatting       | Italic              | ✓          | ✓   | ✓        |
| Formatting       | Bold + Italic       | ✓          | ✓   | ✓        |
| Formatting       | Strikethrough       | ✗          | ✓   | ✓        |
| Lists            | Unordered           | ✓          | ✓   | ✓        |
| Lists            | Ordered             | ✓          | ✓   | ✓        |
| Lists            | Nested              | ✓          | ✓   | ✓        |
| Lists            | Task Lists          | ✗          | ✓   | ✓        |
| Code             | Indented            | ✓          | ✓   | ✓        |
| Code             | Fenced              | ✗          | ✓   | ✓        |
| Code             | Syntax Highlighting | ✗          | ✓   | ✓        |
| Links            | Inline              | ✓          | ✓   | ✓        |
| Links            | Reference           | ✓          | ✓   | ✓        |
| Links            | Autolinks           | ✗          | ✓   | ✓        |
| Tables           | Simple              | ✗          | ✓   | ✓        |
| Tables           | Aligned             | ✗          | ✓   | ✓        |
| Extended         | Definition Lists    | ✗          | ✗   | ✓        |
| Extended         | Footnotes           | ✗          | ✗   | ✓        |
| HTML             | Inline HTML         | ✓          | ✓   | ✓        |
| HTML             | Block HTML          | ✓          | ✓   | ✓        |
| Misc             | Horizontal Rules    | ✓          | ✓   | ✓        |
| Misc             | Blockquotes         | ✓          | ✓   | ✓        |
| Misc             | Escaping            | ✓          | ✓   | ✓        |
| Misc             | Entities            | ✓          | ✓   | ✓        |

---

_This comprehensive single-file guide covers all major features found in CommonMark and GitHub Flavored Markdown, plus definition lists and footnotes for extended functionality. Use it as a reference, a test document, or a template for your own Markdown projects._
