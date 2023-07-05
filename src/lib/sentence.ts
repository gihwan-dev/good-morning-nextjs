// fetch about sentences.

const postSentence = async (sentence: string) => {
  try {
    const result = await fetch("http://localhost:3000/sentence", {
      method: "POST",
      body: JSON.stringify({
        sentence,
      }),
    });
    if (result) {
      // do something.
    }
  } catch (error) {
    // do something.
  }
};
