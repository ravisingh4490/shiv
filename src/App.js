import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./index";
const Button = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="bg-blue-500 text-white px-4 py-2 rounded"
  >
    {children}
  </button>
);

const poetryLines = [
  "Shivani.Krish have laugh like a scream",
  "having pursuing her career in green",
  "Idiot no brainer are her name",
  "very stupid but cant be tamed",
  "A bully in her vains and in heart",
  "Naming trees in street is her art",
  "In the south everyone knows",
  ".krish is rich and fancy things she owns",
  "Richie rich is her synonym and in dollar she pay",
  "indeed her smile worth more than that and she slay",
  "Slightly moody most time good and sometimes witty",
  "Happy Birthday to bully chess amity",
];

const quizQuestions = [
  { q: "What is my favorite hobby", a: "Playing chess and bullying ravi" },
  { q: "What type of men do I feel attracted to", a: "Only Sridhar" },
  { q: "What is my favorite color", a: "Sea green" },
  {
    q: "What is my favorite song",
    a: "Rowdy baby the only Tamil song I heard",
  },
  { q: "What is my favorite movie franchise", a: "Tamil Dubbed Harry Potter" },
  { q: "What is my favorite tree", a: "Mangifera indica" },
  { q: "What is my favorite flower", a: "Myself" },
];

export default function ShivaniProject() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetDate = new Date("March 29, 2025 00:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft("🎉 Happy Birthday, Shivani! 🎂");
        clearInterval(timer);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 to-green-500 text-white p-10 font-serif">
      <motion.h1
        className="text-6xl font-extrabold text-center mb-10 drop-shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        🌿பிறந்தநாள் வாழ்த்துக்கள் ஷிவானி 🌿
      </motion.h1>

      {/* Sample Images */}
      <div className="flex justify-center gap-4 mb-10">
        <img
          src="https://media-hosting.imagekit.io/959789cbe7bd417f/Screenshot%20(117).png?Expires=1837768919&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Bjjexh35634knT1ejGZo1GHL8puGgysgwtEp~PgdZyqQ3zDMP-c94UFv6wP9W3~0iCbbxzV5CcAZ8wjk7VHG~5autYRkIPT858eADADKxYI5yt4tMLU0KRfUwYruS1hT~3AIPMk24F6PBO5h7PGjH9xUyoN317SMjD8lXT0naAhjIFyTaFaHrAvZRCu9M9iTlxfp9udOPzsydgYmnvH9jT2U1BJG3TtKuUaFISoUeDhKd69KIU2o~zCahYuPE6bKjShclIc5-0CH2TeF8g6pw5LrIbRRW9hNUi4DSSP1JxNhKFBHoE06836g2HeIf1OzztPn-nLy~QVJ961gfN0Dhw__"
          alt="Shivani 1"
          className="rounded-xl shadow-md w-40 h-40 object-cover"
        />
        <img
          src="https://media-hosting.imagekit.io/9eab2792a1d04ffc/Screenshot%20(119).png?Expires=1837768919&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0xCk~NCEYEjVs5wLAiVOQMHl~KbRl9trd1M95rMM2M3jIwmlnox~cSy7ZD4lTToUgIRY3Q9VSxcLgIMleNv2~3BLAr7Vxo52sb787SNHOeZBoZlISY9dSattVG9ypQXlIh6xhJuPxvnViS1oUiF20DQ76Gu0zWsWorQF~i78ifcLmlZLJxJ1B4Ry4OQuRa1ENEzO8fLS7JM70kNi1alw7Usb4ep6UvuK5voUtrRKPTuc3S56jWO-LEd1jMyo8YbfyFlithNtGqqmo-tB87H1lI8P9EYLxdcAwcuoIv3m5jbcfOa6tjSugq~QynDAb-rYUJYJHNlJFmgCmiSa4CZdDg__"
          alt="Shivani 2"
          className="rounded-xl shadow-md w-40 h-40 object-cover"
        />
        <img
          src="https://media-hosting.imagekit.io/ac253c16e4e04622/Screenshot%20(120).png?Expires=1837768919&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=DxYnHe~mgiTQA13mluiT5QoU8kiw8xfk00~DbojWE2mOUg63bStbGZG-GVW7V~EFPuF-vh00rfx0zWzEQrW0wQilkoI6KBRCrYWWLoVnzfA08eKBvszHLd24WdMSNRk31srgP67-aXMH9DvOYAzt9~0a~PmhB9R2aW2bOlfcMbuY2ZSqZtwQ6nO5fR-qmWYBUTiVL3ylxhQ8524kHGbQ1uzkSZPW4oHFlJ05pkX23pxpI07PJv04xagT53TfqeTq-osyPvVSDmSsQ0jDEsKgfUET61zTpamP~9nhixadAb3RZcNMCdMDB9f2cjB64JRmTCEpLMzl4N2PYQ711k5Bkg__"
          alt="Shivani 3"
          className="rounded-xl shadow-md w-40 h-40 object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* About Me */}
        <motion.div
          className="bg-white text-black p-6 rounded-3xl shadow-2xl"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-3xl font-bold mb-4">👩 About Me</h2>
          <p className="text-gray-700">
            தமிழ்நாட்டின் கோயம்புத்தூரில் இருந்து நேராக ஷிவானி கிரிஷை
            சந்திக்கவும். அவள் குமிழி வசீகரம் மற்றும் கூர்மையான புத்திசாலித்தனம்
            ஆகியவற்றின் சரியான கலவையைப் பெற்றிருக்கிறாள், வேடிக்கையாக (பொதுவாக
            ரவியின் செலவில்) கிளறுவதில் மறுக்க முடியாத திறமையுடன் தன் படிப்பான
            பக்கத்தை சமநிலைப்படுத்துகிறாள். கவிதை மற்றும் ஆடம்பரமான விஷயங்களை
            விட அவள் ரசிக்கும் ஒரு விஷயம் இருந்தால், அது ரவியை கிண்டல் செய்வதும்
            விளையாட்டுத்தனமாக அறைவதும் ஆகும்-ஏனென்றால், ஏன் இல்லை? ஷிவானிக்கு
            மரங்களுக்கு மென்மையான இடம், கம்பீரமான அழகியல் மற்றும் அந்த பணக்கார
            பெண் ஆற்றல் கொஞ்சம் உண்டு. அவள் மனநிலையுடையவள் ஆனால் காந்தம்
            கொண்டவள், ஆழ்ந்த உரையாடல்களிலிருந்து நொடிகளில் முழுமையான
            முட்டாள்தனத்திற்கு மாறக்கூடியவள். ஆனால் எல்லாவற்றுக்கும் கீழே, அவள்
            மிகவும் விசுவாசமானவள், முடிவில்லாமல் நகைச்சுவையானவள், வாழ்க்கையை
            இன்னும் கொஞ்சம் சுவாரஸ்யமாக்கும் தோழி. ஓ, நீங்கள் உயரமாகவும்,
            கருமையாகவும், நன்கு கட்டமைக்கப்பட்டவராகவும், அழகாகவும் இருந்தால் -
            நல்ல செய்தி! உங்களிடம் ஒரு ரசிகர் மட்டும் இருக்கலாம்.
          </p>
        </motion.div>

        {/* Poetry */}
        <motion.div
          className="bg-white text-black p-6 rounded-3xl shadow-2xl min-h-[400px]"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-3xl font-bold mb-4">📜 Poetry</h2>
          <div className="text-gray-700 italic space-y-1 text-lg">
            {poetryLines.map((line, index) => (
              <motion.p
                whileHover={{ scale: 1.05 }}
                key={index}
                className="whitespace-nowrap"
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Quiz */}
        <motion.div
          className="bg-white text-black p-6 rounded-3xl shadow-2xl"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-3xl font-bold mb-4">🧠 Quiz</h2>
          <p className="text-lg font-semibold mb-2">
            {quizQuestions[quizIndex].q}
          </p>
          {showAnswer && (
            <p className="text-green-700 font-bold">
              {quizQuestions[quizIndex].a}
            </p>
          )}
          <div className="flex gap-4 mt-4">
            <Button
              onClick={() => setShowAnswer(!showAnswer)}
              className="bg-blue-500 text-white hover:bg-blue-700"
            >
              Show Answer
            </Button>
            <Button
              onClick={() =>
                setQuizIndex((quizIndex + 1) % quizQuestions.length)
              }
              className="bg-purple-500 text-white hover:bg-purple-700"
            >
              Next Question
            </Button>
          </div>
        </motion.div>

        {/* Birthday Countdown */}
        <motion.div
          className="bg-white text-black p-6 rounded-3xl shadow-2xl"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-3xl font-bold mb-4">🎂 Birthday Countdown</h2>
          <p className="text-xl font-semibold text-red-600">{timeLeft}</p>
        </motion.div>
      </div>
    </div>
  );
}
