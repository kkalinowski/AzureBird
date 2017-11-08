import delay from './delay'

const texts = [
  {
    id: "react-creating-reusable-components",
    title: "Creating Reusable React Components",
    authorId: "cory-house"
  },
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    authorId: "cory-house"
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    authorId: "cory-house"
  },
  {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    authorId: "cory-house"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    authorId: "cory-house"
  },
  {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    authorId: "cory-house"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

const generateId = (text) => {
  return replaceAll(text.title, ' ', '-');
};

class TextApi {
  static getAllTexts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], texts));
      }, delay);
    });
  }

  static saveText(text) {
    text = Object.assign({}, text); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minTextTitleLength = 1;
        if (text.title.length < minTextTitleLength) {
          reject(`Title must be at least ${minTextTitleLength} characters.`);
        }

        if (text.id) {
          const existingTextIndex = texts.findIndex(a => a.id == text.id);
          texts.splice(existingTextIndex, 1, text);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new texts in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          text.id = generateId(text);
          texts.push(text);
        }

        resolve(text);
      }, delay);
    });
  }

  static deleteText(textId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const indexOfTextToDelete = texts.findIndex(text => {
          return text.textId == textId;
        });
        texts.splice(indexOfTextToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default TextApi;
