import "./HelloPage.scss";
import BackgroundBlurs from "../../assets/Background Blurs.svg";
import { useEffect, useRef, useState } from "react";

interface HelloPageInterface {}
const HelloPage: React.FC<HelloPageInterface> = () => {
  const startDelay = 1000;
  const digitTime = 60;
  const commentText = "// Say hello to the user";
  const constantText = [
    {
      text: "const ",
      class: "clr-secondary-300",
    },
    {
      text: "welcomeMessage ",
      class: "clr-gradient-end",
    },
    {
      text: "= ",
      class: "clr-white",
    },
    {
      text: '"Welcome to my portfolio"',
      class: "clr-accent-300",
    },
    {
      text: ";",
      class: "clr-white d-inline-block",
    },
  ];
  const constantTextMobileFirst = [
    {
      text: "const ",
      class: "clr-secondary-300",
    },
    {
      text: "welcomeMessage ",
      class: "clr-gradient-end",
    },
    {
      text: "= ",
      class: "clr-white",
    },
  ];
  const constantTextMobileSecond = [
    {
      text: '"Welcome to my portfolio"',
      class: "clr-accent-300 ps-5 ps-sm-0",
    },
    {
      text: ";",
      class: "clr-white d-inline-block",
    },
  ];
  const consoleLogText = [
    {
      text: "console",
      class: "clr-secondary-100",
    },
    {
      text: ".",
      class: "clr-white",
    },
    {
      text: "log",
      class: "clr-accent-100",
    },
    {
      text: "(",
      class: "clr-accent-400",
    },
    {
      text: "welcomeMessage",
      class: "clr-gradient-end",
    },
    {
      text: ")",
      class: "clr-accent-400",
    },
    {
      text: ";",
      class: "clr-white",
    },
  ];
  const timeoutsRef = useRef<number[]>([]);
  const [commentTextToShow, setCommentTextToShow] = useState<string>("");
  const [commentTextCursorVisible, setCommentTextCursorVisible] =
    useState<boolean>(true);
  const [constantTextHtml, setConstantTextHtml] = useState<string>("");
  const [constantTextHtmlCursorVisible, setConstantTextHtmlCursorVisible] =
    useState<boolean>(false);
  const [constantTextMobileFirstHtml, setConstantTextMobileFirstHtml] =
    useState<string>("");
  const [
    constantTextMobileFirstHtmlCursorVisible,
    setConstantTextMobileFirstHtmlCursorVisible,
  ] = useState<boolean>(false);
  const [constantTextMobileSecondHtml, setConstantTextMobileSecondHtml] =
    useState<string>("");
  const [
    constantTextMobileSecondHtmlCursorVisible,
    setConstantTextMobileSecondHtmlCursorVisible,
  ] = useState<boolean>(false);
  const [consoleLogTextHtml, setConsoleLogTextHtml] = useState<string>("");
  const [consoleLogTextHtmlCursorVisible, setConsoleLogTextHtmlCursorVisible] =
    useState<boolean>(false);

  useEffect(() => {
    timeoutsRef.current.push(
      setTimeout(() => {
        setCommentText();
      }, startDelay)
    );
    return () => {
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  const setCommentText = () => {
    setCommentTextCursorVisible(true);
    let text = "";
    commentText.split("").forEach((char, index) => {
      timeoutsRef.current.push(
        setTimeout(() => {
          text += char === " " ? "&nbsp;" : char;
          setCommentTextToShow(text);
        }, digitTime * (index + 1))
      );
    });
    timeoutsRef.current.push(
      setTimeout(() => {
        setCommentTextCursorVisible(false);
        setConstantText();
        setConstantTextMobileFirst();
      }, digitTime * (commentText.length + 1))
    );
  };

  const setConstantText = () => {
    setConstantTextHtmlCursorVisible(true);
    let texts = constantText.map(() => "");
    let index = 1;
    constantText.forEach((section, sectionIndex) => {
      let actualText = "";
      section.text.split("").forEach((char) => {
        timeoutsRef.current.push(
          setTimeout(() => {
            actualText += char === " " ? "&nbsp;" : char;
            texts[
              sectionIndex
            ] = `<span class="${section.class}">${actualText}</span>`;
            setConstantTextHtml(texts.join(""));
          }, digitTime * index)
        );
        index++;
      });
    });
    timeoutsRef.current.push(
      setTimeout(() => {
        setConstantTextHtmlCursorVisible(false);
        setConsoleLogText();
      }, digitTime * index)
    );
  };

  const setConstantTextMobileFirst = () => {
    setConstantTextMobileFirstHtmlCursorVisible(true);
    let texts = constantTextMobileFirst.map(() => "");
    let index = 1;
    constantTextMobileFirst.forEach((section, sectionIndex) => {
      let actualText = "";
      section.text.split("").forEach((char) => {
        timeoutsRef.current.push(
          setTimeout(() => {
            actualText += char === " " ? "&nbsp;" : char;
            texts[
              sectionIndex
            ] = `<span class="${section.class}">${actualText}</span>`;
            setConstantTextMobileFirstHtml(texts.join(""));
          }, digitTime * index)
        );
        index++;
      });
    });
    timeoutsRef.current.push(
      setTimeout(() => {
        setConstantTextMobileFirstHtmlCursorVisible(false);
        setConstantTextMobileSecond();
      }, digitTime * index)
    );
  };

  const setConstantTextMobileSecond = () => {
    setConstantTextMobileSecondHtmlCursorVisible(true);
    let texts = constantTextMobileSecond.map(() => "");
    let index = 1;
    constantTextMobileSecond.forEach((section, sectionIndex) => {
      let actualText = "";
      section.text.split("").forEach((char) => {
        timeoutsRef.current.push(
          setTimeout(() => {
            actualText += char === " " ? "&nbsp;" : char;
            texts[
              sectionIndex
            ] = `<span class="${section.class}">${actualText}</span>`;
            setConstantTextMobileSecondHtml(texts.join(""));
          }, digitTime * index)
        );
        index++;
      });
    });
    timeoutsRef.current.push(
      setTimeout(() => {
        setConstantTextMobileSecondHtmlCursorVisible(false);
      }, digitTime * index)
    );
  };

  const setConsoleLogText = () => {
    setConsoleLogTextHtmlCursorVisible(true);
    let texts = consoleLogText.map(() => "");
    let index = 1;
    consoleLogText.forEach((section, sectionIndex) => {
      let actualText = "";
      section.text.split("").forEach((char) => {
        timeoutsRef.current.push(
          setTimeout(() => {
            actualText += char === " " ? "&nbsp;" : char;
            texts[
              sectionIndex
            ] = `<span class="${section.class}">${actualText}</span>`;
            setConsoleLogTextHtml(texts.join(""));
          }, digitTime * index)
        );
        index++;
      });
    });
    timeoutsRef.current.push(
      setTimeout(() => {
        console.log("Welcome to my portfolio"); // Easter egg
      }, digitTime * index)
    );
  };

  return (
    <div className="hello-page d-flex justify-content-center align-items-start position-relative">
      <img
        className="hello-page__bg-blurs position-absolute top-0"
        src={BackgroundBlurs}
        alt=""
      />
      <div className="w-auto mw-100 px-5 pt-5 pt-sm-0">
        <div className="pb-5 fade-in">
          <div className="clr-secondary-400 theme-text-body m-0">
            Hi all. I am
          </div>
          <div className="clr-secondary-400 theme-text-title m-0 lh-1">
            Nicolò Fontana
          </div>
          <div className="clr-secondary-300 theme-text-subtitle m-0 lh-1">
            &gt; Front-end developer
          </div>
        </div>
        <div className="pt-5 d-flex flex-column align-items-start">
          <div
            className={`clr-secondary-100 theme-text-body-small ${
              commentTextCursorVisible ? "cursor-blink" : ""
            }`}
            dangerouslySetInnerHTML={{ __html: commentTextToShow }}
          ></div>
          <div
            className={`m-0 theme-text-body-small d-none d-sm-block ${
              constantTextHtmlCursorVisible ? "cursor-blink" : ""
            }`}
            dangerouslySetInnerHTML={{ __html: constantTextHtml }}
          ></div>
          {/* MOBILE */}
          <div
            className={`m-0 theme-text-body-small d-block d-sm-none ${
              constantTextMobileFirstHtmlCursorVisible ? "cursor-blink" : ""
            }`}
            dangerouslySetInnerHTML={{ __html: constantTextMobileFirstHtml }}
          ></div>
          <div
            className={`m-0 theme-text-body-small d-block d-sm-none ${
              constantTextMobileSecondHtmlCursorVisible ? "cursor-blink" : ""
            }`}
            dangerouslySetInnerHTML={{ __html: constantTextMobileSecondHtml }}
          ></div>
          {/* END MOBILE */}
          <div
            className={`m-0 theme-text-body-small clr-white ${
              consoleLogTextHtmlCursorVisible ? "cursor-blink" : ""
            }`}
            dangerouslySetInnerHTML={{ __html: consoleLogTextHtml }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default HelloPage;
