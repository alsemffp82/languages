window.LESSON_DATA = {
  "lesson1": {
    "id": "lesson1",
    "stage": 1,
    "stageTitle": "At the Airport",
    "appTitle": "Seoul Korean",
    "character": {
      "default": "images/1.png",
      "correct": "images/2.png",
      "wrong": "images/3.png",
      "cheer": "images/4.png",
      "complete": "images/6.png"
    },
    "sections": [
      {
        "type": "phrase",
        "stepLabel": "Today's Phrase",
        "stepTitle": "Learn this one phrase first",
        "character": {
          "img": "images/1.png",
          "msg": "Let's start!<br>You've got this! 😊"
        },
        "korean": "저기요~",
        "reading": "jeo-gi-yo~",
        "meaning": "Excuse me~ / Hey there~",
        "audioKey": "저기요",
        "scenes": [
          {
            "icon": "🛄",
            "text": "At the airport and your bag hasn't arrived. You need to get a staff member's attention!"
          },
          {
            "icon": "🍜",
            "text": "At a Korean restaurant and you're ready to order. Time to call the server over!"
          },
          {
            "icon": "🛍️",
            "text": "Shopping at a market and you want to ask about a product. Catch the staff's eye!"
          }
        ]
      },
      {
        "type": "compare",
        "stepLabel": "English vs Korean",
        "stepTitle": "Good news: you already know hundreds of Korean words!",
        "character": {
          "img": "images/1.png",
          "msg": "Coffee = 커피!<br>You already know Korean! 😄"
        },
        "japanese": {
          "sentence": "Give me\nthis, please.",
          "reading": "Verb comes before the object"
        },
        "korean": {
          "sentence": "이거\n주세요.",
          "reading": "i-geo ju-se-yo — This + give me"
        },
        "insight": "Korean puts the verb at the end of the sentence. It feels different at first, but the pattern <strong>never changes</strong> — and once you see it, you can build endless sentences from one template.",
        "vocab": [
          {
            "korean": "커피",
            "japanese": "keopi → coffee ☕"
          },
          {
            "korean": "버스",
            "japanese": "beoseu → bus 🚌"
          },
          {
            "korean": "호텔",
            "japanese": "hotel → hotel 🏨"
          },
          {
            "korean": "택시",
            "japanese": "taeksi → taxi 🚕"
          },
          {
            "korean": "인터넷",
            "japanese": "inteonet → internet 💻"
          },
          {
            "korean": "파스타",
            "japanese": "paseuteo → pasta 🍝"
          }
        ]
      },
      {
        "type": "pattern",
        "stepLabel": "Pattern Practice",
        "stepTitle": "Swap the word — make a sentence!",
        "character": {
          "img": "images/4.png",
          "msg": "Pick a word and<br>build your sentence!"
        },
        "instruction": "\"___ juseyo\" = \"Give me ___.\" Tap a word to try it! 👇",
        "template": {
          "korean": "___ 주세요.",
          "reading": "(tap a word below)",
          "japanese": "___ please.",
          "readingTemplate": "___ ju-se-yo.",
          "japaneseTemplate": "___ please."
        },
        "words": [
          {
            "korean": "이거",
            "reading": "i-geo",
            "japanese": "this",
            "audioKey": "이거 주세요"
          },
          {
            "korean": "저거",
            "reading": "jeo-geo",
            "japanese": "that",
            "audioKey": "저거 주세요"
          },
          {
            "korean": "영수증",
            "reading": "yeong-su-jeung",
            "japanese": "receipt",
            "audioKey": "영수증 주세요"
          },
          {
            "korean": "사진",
            "reading": "sa-jin",
            "japanese": "photo",
            "audioKey": "사진 주세요"
          }
        ]
      },
      {
        "type": "quiz",
        "stepLabel": "Mini Quiz",
        "stepTitle": "Let's check what you remember!",
        "character": {
          "img": "images/1.png",
          "msg": "Quiz time!<br>You'll do great 😊"
        },
        "questions": [
          {
            "icon": "🛄",
            "question": "At the airport, how do you get a staff member's attention?",
            "sub": "Think back to today's phrase!",
            "options": [
              {
                "korean": "감사합니다",
                "reading": "gam-sa-ham-ni-da",
                "correct": false
              },
              {
                "korean": "저기요",
                "reading": "jeo-gi-yo",
                "correct": true
              },
              {
                "korean": "미안합니다",
                "reading": "mi-an-ham-ni-da",
                "correct": false
              }
            ],
            "correctMsg": "Correct! 저기요 is a universal phrase — use it anywhere you need someone's attention.",
            "wrongMsg": "Not quite! The answer is 저기요 (jeo-gi-yo). Think of it as a friendly 'Excuse me~' — works everywhere."
          },
          {
            "icon": "🍜",
            "question": "At a restaurant, how do you say \"Give me this\"?",
            "sub": "Think back to the pattern practice!",
            "options": [
              {
                "korean": "이거 괜찮아요",
                "reading": "i-geo gwaen-cha-na-yo",
                "correct": false
              },
              {
                "korean": "이거 주세요",
                "reading": "i-geo ju-se-yo",
                "correct": true
              },
              {
                "korean": "이거 미안해요",
                "reading": "i-geo mi-an-hae-yo",
                "correct": false
              }
            ],
            "correctMsg": "Perfect! 이거 주세요 works at any restaurant, café, or market in Seoul!",
            "wrongMsg": "Not quite! The answer is 이거 주세요 (i-geo ju-se-yo). 이거 = this, 주세요 = give me please."
          }
        ]
      },
      {
        "type": "culture",
        "stepLabel": "Culture Note",
        "stepTitle": "Fun things to know about Korea!",
        "character": {
          "img": "images/6.png",
          "msg": "Lesson complete!<br>You're amazing! 🎉"
        },
        "culture": {
          "icon": "🔔",
          "title": "Korean restaurants have table call buttons!",
          "body": "You don't need to wave your arm or try to make eye contact — most Korean restaurants have a <hl>call bell</hl> right on your table!<br><br>But when you want to call out, just say:<br><hl>\"<kr>저기요</kr>～！(jeo-gi-yo!)\"</hl><br>It works exactly like \"Excuse me!\" in English — friendly and natural.<br><br>Also worth knowing: <hl><kr>물</kr> (mul) = water</hl> is often self-service at Korean restaurants. Look for the water dispenser near the kitchen or counter."
        },
        "drama": {
          "lines": [
            "진짜？",
            "대박！"
          ],
          "reading": "jin-jja? / dae-bak!",
          "japanese": "\"Really?\" / \"Amazing! / No way!\"",
          "note": "You've definitely heard these in K-dramas! Now you know exactly what they mean ✨"
        },
        "summary": [
          {
            "korean": "저기요",
            "reading": "jeo-gi-yo"
          },
          {
            "korean": "이거 주세요",
            "reading": "i-geo ju-se-yo"
          },
          {
            "korean": "감사합니다",
            "reading": "gam-sa-ham-ni-da"
          },
          {
            "korean": "진짜",
            "reading": "jin-jja"
          }
        ]
      }
    ]
  },
  "lesson2": {
    "id": "lesson2",
    "stage": 2,
    "stageTitle": "At the Café",
    "appTitle": "Seoul Korean",
    "character": {
      "default": "images/1.png",
      "correct": "images/2.png",
      "wrong": "images/3.png",
      "cheer": "images/4.png",
      "complete": "images/6.png"
    },
    "sections": [
      {
        "type": "phrase",
        "stepLabel": "Today's Phrase",
        "stepTitle": "Order at a Korean café like a pro",
        "character": {
          "img": "images/1.png",
          "msg": "Korean cafés are<br>the best! ☕"
        },
        "korean": "아메리카노 하나 주세요",
        "reading": "a-me-ri-ka-no ha-na ju-se-yo",
        "meaning": "One Americano, please",
        "audioKey": "아메리카노 하나 주세요",
        "scenes": [
          {
            "icon": "☕",
            "text": "Ordering your first drink at a Korean café — Americanos are the most popular coffee in Korea!"
          },
          {
            "icon": "🧾",
            "text": "The cashier asks how many — 하나 (ha-na) = one. You've got this."
          },
          {
            "icon": "🛒",
            "text": "The same pattern works for any item — just swap the item name and number."
          }
        ]
      },
      {
        "type": "compare",
        "stepLabel": "English vs Korean",
        "stepTitle": "Korean has two number systems — and you'll use both!",
        "character": {
          "img": "images/1.png",
          "msg": "하나, 둘, 셋...<br>Let's count! 🔢"
        },
        "japanese": {
          "sentence": "One coffee,\nplease.",
          "reading": "English: item + quantity"
        },
        "korean": {
          "sentence": "아메리카노\n하나 주세요.",
          "reading": "a-me-ri-ka-no ha-na ju-se-yo"
        },
        "insight": "For counting items (1, 2, 3...) Korean uses native numbers: <strong>하나(1), 둘(2), 셋(3)</strong>. For money, floors, and minutes, it uses Sino-Korean: <strong>일(1), 이(2), 삼(3)</strong>. You'll learn both naturally through practice!",
        "vocab": [
          {
            "korean": "아메리카노",
            "japanese": "americano → Americano ☕"
          },
          {
            "korean": "라떼",
            "japanese": "latte → Latte 🥛"
          },
          {
            "korean": "카페",
            "japanese": "kape → café 🏠"
          },
          {
            "korean": "아이스",
            "japanese": "aiseu → iced ❄️"
          },
          {
            "korean": "바닐라",
            "japanese": "banilla → vanilla 🍦"
          },
          {
            "korean": "카라멜",
            "japanese": "karamel → caramel 🍮"
          }
        ]
      },
      {
        "type": "pattern",
        "stepLabel": "Pattern Practice",
        "stepTitle": "Customize your order!",
        "character": {
          "img": "images/4.png",
          "msg": "Pick your<br>preference! ☕"
        },
        "instruction": "Add these to your order — just say it after the drink name! 👇",
        "template": {
          "korean": "___ 주세요.",
          "reading": "(tap a word below)",
          "japanese": "___ please.",
          "readingTemplate": "___ ju-se-yo.",
          "japaneseTemplate": "___ please."
        },
        "words": [
          {
            "korean": "아이스",
            "reading": "a-i-seu",
            "japanese": "iced",
            "audioKey": "아이스 주세요"
          },
          {
            "korean": "따뜻하게",
            "reading": "tta-tteut-ha-ge",
            "japanese": "hot/warm",
            "audioKey": "따뜻하게 주세요"
          },
          {
            "korean": "큰 걸로",
            "reading": "keun geol-lo",
            "japanese": "large size",
            "audioKey": "큰 걸로 주세요"
          },
          {
            "korean": "아메리카노 하나",
            "reading": "a-me-ri-ka-no ha-na",
            "japanese": "1 Americano",
            "audioKey": "아메리카노 하나 주세요"
          }
        ]
      },
      {
        "type": "quiz",
        "stepLabel": "Mini Quiz",
        "stepTitle": "Let's check what you remember!",
        "character": {
          "img": "images/1.png",
          "msg": "Quiz time!<br>You've got this 😊"
        },
        "questions": [
          {
            "icon": "☕",
            "question": "How do you order \"One Americano, please\"?",
            "sub": "Think back to today's phrase!",
            "options": [
              {
                "korean": "아메리카노 하나 주세요",
                "reading": "a-me-ri-ka-no ha-na ju-se-yo",
                "correct": true
              },
              {
                "korean": "아메리카노 하나 있어요",
                "reading": "a-me-ri-ka-no ha-na is-seo-yo",
                "correct": false
              },
              {
                "korean": "아메리카노 하나 감사해요",
                "reading": "a-me-ri-ka-no ha-na gam-sa-hae-yo",
                "correct": false
              }
            ],
            "correctMsg": "Perfect! 아메리카노 하나 주세요 — you can order anything by swapping the item and number.",
            "wrongMsg": "Not quite! The answer is 아메리카노 하나 주세요. 주세요 = 'please give me' — the magic ending for ordering anything!"
          },
          {
            "icon": "❄️",
            "question": "How do you say \"iced, please\" at a café?",
            "sub": "Think back to the pattern practice!",
            "options": [
              {
                "korean": "따뜻하게 주세요",
                "reading": "tta-tteut-ha-ge ju-se-yo",
                "correct": false
              },
              {
                "korean": "아이스 주세요",
                "reading": "a-i-seu ju-se-yo",
                "correct": true
              },
              {
                "korean": "큰 걸로 주세요",
                "reading": "keun geol-lo ju-se-yo",
                "correct": false
              }
            ],
            "correctMsg": "Correct! 아이스 is borrowed directly from English — 'ice' → 아이스. Easy!",
            "wrongMsg": "Not quite! 아이스 주세요 (a-i-seu ju-se-yo) — 아이스 comes from the English word 'ice'!"
          }
        ]
      },
      {
        "type": "culture",
        "stepLabel": "Culture Note",
        "stepTitle": "Seoul has the most cafés per capita in the world!",
        "character": {
          "img": "images/6.png",
          "msg": "Lesson complete!<br>You're amazing! 🎉"
        },
        "culture": {
          "icon": "☕",
          "title": "Korea's café culture is next level",
          "body": "Seoul has more cafés per square kilometer than almost anywhere on earth. <hl>카공족 (ka-gong-jok)</hl> — people who study or work at cafés — are a real cultural phenomenon.<br><br>Popular order tips:<br>• Say <hl>\"<kr>아이스</kr> 주세요\"</hl> for iced (most Koreans drink iced year-round!)<br>• <hl>\"<kr>따뜻하게</kr> 주세요\"</hl> = hot/warm, please<br>• <hl>\"<kr>테이크아웃</kr> 주세요\"</hl> = to go, please (takeout = 테이크아웃)<br><br>Tip: many Korean cafés are incredibly Instagram-worthy. Themed cafés, rooftop cafés, and dessert cafés are everywhere!"
        },
        "drama": {
          "lines": [
            "같이 카페 갈까?",
            "응, 가자!"
          ],
          "reading": "ga-chi ka-pe gal-kka? / eung, ga-ja!",
          "japanese": "\"Shall we go to a café together?\" / \"Yeah, let's go!\"",
          "note": "A classic K-drama scene. Now you can have this conversation! ✨"
        },
        "summary": [
          {
            "korean": "아메리카노 하나 주세요",
            "reading": "a-me-ri-ka-no ha-na ju-se-yo"
          },
          {
            "korean": "아이스 주세요",
            "reading": "a-i-seu ju-se-yo"
          },
          {
            "korean": "따뜻하게 주세요",
            "reading": "tta-tteut-ha-ge ju-se-yo"
          },
          {
            "korean": "큰 걸로 주세요",
            "reading": "keun geol-lo ju-se-yo"
          }
        ]
      }
    ]
  },
  "lesson3": {
    "id": "lesson3",
    "stage": 3,
    "stageTitle": "At the Hotel",
    "appTitle": "Seoul Korean",
    "character": {
      "default": "images/1.png",
      "correct": "images/2.png",
      "wrong": "images/3.png",
      "cheer": "images/4.png",
      "complete": "images/6.png"
    },
    "sections": [
      {
        "type": "phrase",
        "stepLabel": "Today's Phrase",
        "stepTitle": "Check into your Seoul hotel",
        "character": {
          "img": "images/1.png",
          "msg": "Welcome to<br>Seoul! 🏨"
        },
        "korean": "체크인 하려고요",
        "reading": "che-keu-in ha-ryeo-go-yo",
        "meaning": "I'm here to check in",
        "audioKey": "체크인 하려고요",
        "scenes": [
          {
            "icon": "🏨",
            "text": "You arrive at your hotel. Walk up to the front desk and say this — the staff will take care of the rest!"
          },
          {
            "icon": "🕐",
            "text": "Early check-in? Say this and ask if your room is ready."
          },
          {
            "icon": "🧳",
            "text": "Great for guesthouses and traditional hanok stays too!"
          }
        ]
      },
      {
        "type": "compare",
        "stepLabel": "English vs Korean",
        "stepTitle": "The \"-ryeogo-yo\" ending is super useful!",
        "character": {
          "img": "images/1.png",
          "msg": "One ending,<br>endless uses! 🗝️"
        },
        "japanese": {
          "sentence": "I'm here\nto check in.",
          "reading": "English: 'I'm here to + verb'"
        },
        "korean": {
          "sentence": "체크인\n하려고요.",
          "reading": "che-keu-in ha-ryeo-go-yo"
        },
        "insight": "<strong>-려고요 (-ryeo-go-yo)</strong> means 'I'm here to / I'm going to'. It's a super polite way to state your intention. You can attach it to any action: 체크인 하려고요 (check in), 예약 하려고요 (make a reservation), 주문 하려고요 (order)...",
        "vocab": [
          {
            "korean": "체크인",
            "japanese": "chekeu-in → check-in 🏨"
          },
          {
            "korean": "체크아웃",
            "japanese": "chekeu-aut → check-out 🚪"
          },
          {
            "korean": "룸서비스",
            "japanese": "rum-seo-bi-seu → room service 🍽️"
          },
          {
            "korean": "와이파이",
            "japanese": "wa-i-pa-i → WiFi 📶"
          },
          {
            "korean": "에어컨",
            "japanese": "e-eo-kon → air conditioner ❄️"
          },
          {
            "korean": "샴푸",
            "japanese": "syam-pu → shampoo 🧴"
          }
        ]
      },
      {
        "type": "pattern",
        "stepLabel": "Pattern Practice",
        "stepTitle": "Ask if they have what you need!",
        "character": {
          "img": "images/4.png",
          "msg": "Ask away!<br>They'll help you 😊"
        },
        "instruction": "\"___ isseoyo?\" = \"Do you have ___?\" Tap a word to practice! 👇",
        "template": {
          "korean": "___ 있어요?",
          "reading": "(tap a word below)",
          "japanese": "Do you have ___?",
          "readingTemplate": "___ is-seo-yo?",
          "japaneseTemplate": "Do you have ___?"
        },
        "words": [
          {
            "korean": "수건",
            "reading": "su-geon",
            "japanese": "towel",
            "audioKey": "수건 있어요"
          },
          {
            "korean": "와이파이",
            "reading": "wa-i-pa-i",
            "japanese": "WiFi",
            "audioKey": "와이파이 있어요"
          },
          {
            "korean": "칫솔",
            "reading": "chit-sol",
            "japanese": "toothbrush",
            "audioKey": "칫솔 있어요"
          },
          {
            "korean": "짐 보관",
            "reading": "jim bo-gwan",
            "japanese": "luggage storage",
            "audioKey": "짐 보관 있어요"
          }
        ]
      },
      {
        "type": "quiz",
        "stepLabel": "Mini Quiz",
        "stepTitle": "Let's check what you remember!",
        "character": {
          "img": "images/1.png",
          "msg": "Quiz time!<br>You can do it! 😊"
        },
        "questions": [
          {
            "icon": "🏨",
            "question": "How do you say \"I'm here to check in\" at the front desk?",
            "sub": "Think back to today's phrase!",
            "options": [
              {
                "korean": "체크인 하려고요",
                "reading": "che-keu-in ha-ryeo-go-yo",
                "correct": true
              },
              {
                "korean": "체크인 있어요",
                "reading": "che-keu-in is-seo-yo",
                "correct": false
              },
              {
                "korean": "체크인 감사해요",
                "reading": "che-keu-in gam-sa-hae-yo",
                "correct": false
              }
            ],
            "correctMsg": "Perfect! 체크인 하려고요 — polite and natural. The hotel staff will love it!",
            "wrongMsg": "Not quite! The answer is 체크인 하려고요 (che-keu-in ha-ryeo-go-yo). -하려고요 means 'I'm here to / I intend to'."
          },
          {
            "icon": "📶",
            "question": "How do you ask \"Do you have WiFi?\"",
            "sub": "Think back to the pattern practice!",
            "options": [
              {
                "korean": "와이파이 있어요?",
                "reading": "wa-i-pa-i is-seo-yo?",
                "correct": true
              },
              {
                "korean": "와이파이 주세요",
                "reading": "wa-i-pa-i ju-se-yo",
                "correct": false
              },
              {
                "korean": "와이파이 하려고요",
                "reading": "wa-i-pa-i ha-ryeo-go-yo",
                "correct": false
              }
            ],
            "correctMsg": "Correct! 있어요? (is-seo-yo?) is 'do you have / is there' — use this pattern to ask about anything!",
            "wrongMsg": "Not quite! 와이파이 있어요? (wa-i-pa-i is-seo-yo?) — 있어요 means 'is there / do you have'."
          }
        ]
      },
      {
        "type": "culture",
        "stepLabel": "Culture Note",
        "stepTitle": "Where to stay in Seoul",
        "character": {
          "img": "images/6.png",
          "msg": "Lesson complete!<br>You're amazing! 🎉"
        },
        "culture": {
          "icon": "🏡",
          "title": "Try a 한옥 (hanok) guesthouse!",
          "body": "Seoul has everything from luxury hotels to cozy <hl>한옥 (ha-nok)</hl> — traditional Korean wooden houses. Staying in one in neighborhoods like <hl>Bukchon or Ikseon-dong</hl> is a truly unique experience.<br><br>Useful hotel vocab:<br>• <hl><kr>욕실</kr> (yok-sil)</hl> = bathroom<br>• <hl><kr>수건</kr> (su-geon)</hl> = towel<br>• <hl><kr>조식</kr> (jo-sik)</hl> = breakfast<br><br>Many guesthouses are run by friendly locals who love talking to international guests — even a little Korean goes a long way! 😊"
        },
        "drama": {
          "lines": [
            "잘 자!",
            "잘 자요."
          ],
          "reading": "jal ja! / jal ja-yo.",
          "japanese": "\"Sleep well! / Good night!\" (casual / polite)",
          "note": "The polite version ends in -요 (-yo). You'll hear both in dramas ✨"
        },
        "summary": [
          {
            "korean": "체크인 하려고요",
            "reading": "che-keu-in ha-ryeo-go-yo"
          },
          {
            "korean": "수건 있어요?",
            "reading": "su-geon is-seo-yo?"
          },
          {
            "korean": "와이파이 있어요?",
            "reading": "wa-i-pa-i is-seo-yo?"
          },
          {
            "korean": "감사합니다",
            "reading": "gam-sa-ham-ni-da"
          }
        ]
      }
    ]
  },
  "lesson4": {
    "id": "lesson4",
    "stage": 4,
    "stageTitle": "On the Subway",
    "appTitle": "Seoul Korean",
    "character": {
      "default": "images/1.png",
      "correct": "images/2.png",
      "wrong": "images/3.png",
      "cheer": "images/4.png",
      "complete": "images/6.png"
    },
    "sections": [
      {
        "type": "phrase",
        "stepLabel": "Today's Phrase",
        "stepTitle": "Navigate the Seoul subway!",
        "character": {
          "img": "images/1.png",
          "msg": "Seoul subway is<br>amazing! 🚇"
        },
        "korean": "어디서 갈아타요?",
        "reading": "eo-di-seo ga-ra-ta-yo?",
        "meaning": "Where do I transfer?",
        "audioKey": "어디서 갈아타요",
        "scenes": [
          {
            "icon": "🚇",
            "text": "On the Seoul Metro and not sure where to switch lines. Ask a fellow passenger or station staff!"
          },
          {
            "icon": "🗺️",
            "text": "The Seoul subway has 9+ lines and goes everywhere — transfers are common."
          },
          {
            "icon": "📱",
            "text": "Tip: Naver Maps and Kakao Maps are better than Google Maps for Seoul navigation!"
          }
        ]
      },
      {
        "type": "compare",
        "stepLabel": "English vs Korean",
        "stepTitle": "Korean question words are easy!",
        "character": {
          "img": "images/1.png",
          "msg": "어디 = where!<br>뭐 = what! 📍"
        },
        "japanese": {
          "sentence": "Where do I\ntransfer?",
          "reading": "English: question word comes first"
        },
        "korean": {
          "sentence": "어디서\n갈아타요?",
          "reading": "eo-di-seo ga-ra-ta-yo?"
        },
        "insight": "Korean question words: <strong>어디 (where), 뭐 (what), 언제 (when), 누구 (who), 왜 (why), 어떻게 (how)</strong>. Unlike English, they stay in their natural sentence position — the sentence just goes up in tone at the end to signal a question!",
        "vocab": [
          {
            "korean": "지하철",
            "japanese": "ji-ha-cheol → subway/metro 🚇"
          },
          {
            "korean": "버스",
            "japanese": "beoseu → bus 🚌"
          },
          {
            "korean": "택시",
            "japanese": "taeksi → taxi 🚕"
          },
          {
            "korean": "역",
            "japanese": "yeok → station 🏢"
          },
          {
            "korean": "출구",
            "japanese": "chul-gu → exit 🚪"
          },
          {
            "korean": "노선",
            "japanese": "no-seon → line/route 🗺️"
          }
        ]
      },
      {
        "type": "pattern",
        "stepLabel": "Pattern Practice",
        "stepTitle": "Say where you want to go!",
        "character": {
          "img": "images/4.png",
          "msg": "Tell them your<br>destination! 🗺️"
        },
        "instruction": "\"___e gago sipeoyo\" = \"I want to go to ___\". Pick a destination! 👇",
        "template": {
          "korean": "___에 가고 싶어요.",
          "reading": "(tap a destination below)",
          "japanese": "I want to go to ___.",
          "readingTemplate": "___-e ga-go si-peo-yo.",
          "japaneseTemplate": "I want to go to ___."
        },
        "words": [
          {
            "korean": "명동",
            "reading": "Myeong-dong",
            "japanese": "Myeongdong",
            "audioKey": "명동에 가고 싶어요"
          },
          {
            "korean": "홍대",
            "reading": "Hong-dae",
            "japanese": "Hongdae",
            "audioKey": "홍대에 가고 싶어요"
          },
          {
            "korean": "경복궁",
            "reading": "Gyeong-bok-gung",
            "japanese": "Gyeongbokgung",
            "audioKey": "경복궁에 가고 싶어요"
          },
          {
            "korean": "인사동",
            "reading": "In-sa-dong",
            "japanese": "Insadong",
            "audioKey": "인사동에 가고 싶어요"
          }
        ]
      },
      {
        "type": "quiz",
        "stepLabel": "Mini Quiz",
        "stepTitle": "Let's check what you remember!",
        "character": {
          "img": "images/1.png",
          "msg": "Quiz time!<br>You can do it! 😊"
        },
        "questions": [
          {
            "icon": "🚇",
            "question": "How do you ask \"Where do I transfer?\"",
            "sub": "Think back to today's phrase!",
            "options": [
              {
                "korean": "어디서 갈아타요?",
                "reading": "eo-di-seo ga-ra-ta-yo?",
                "correct": true
              },
              {
                "korean": "어디서 가려고요?",
                "reading": "eo-di-seo ga-ryeo-go-yo?",
                "correct": false
              },
              {
                "korean": "어디서 주세요?",
                "reading": "eo-di-seo ju-se-yo?",
                "correct": false
              }
            ],
            "correctMsg": "Correct! 어디서 갈아타요? — 어디 = where, 갈아타다 = to transfer. Natural and clear!",
            "wrongMsg": "Not quite! The answer is 어디서 갈아타요? (eo-di-seo ga-ra-ta-yo?) — 갈아타다 specifically means 'to transfer between vehicles'."
          },
          {
            "icon": "🏯",
            "question": "How do you say \"I want to go to Gyeongbokgung\"?",
            "sub": "Think back to the pattern practice!",
            "options": [
              {
                "korean": "경복궁에 있어요?",
                "reading": "gyeong-bok-gung-e is-seo-yo?",
                "correct": false
              },
              {
                "korean": "경복궁에 가고 싶어요.",
                "reading": "gyeong-bok-gung-e ga-go si-peo-yo.",
                "correct": true
              },
              {
                "korean": "경복궁에 주세요.",
                "reading": "gyeong-bok-gung-e ju-se-yo.",
                "correct": false
              }
            ],
            "correctMsg": "Perfect! 경복궁에 가고 싶어요 — the -에 particle marks direction (to/at). Swap any destination!",
            "wrongMsg": "Not quite! 경복궁에 가고 싶어요 — 가고 싶어요 = I want to go. -에 = to (direction)."
          }
        ]
      },
      {
        "type": "culture",
        "stepLabel": "Culture Note",
        "stepTitle": "Seoul's subway is one of the best in the world",
        "character": {
          "img": "images/6.png",
          "msg": "Lesson complete!<br>You're amazing! 🎉"
        },
        "culture": {
          "icon": "🚇",
          "title": "The Seoul Metro: clean, fast, and everywhere",
          "body": "The Seoul subway has <hl>9 main lines + multiple branches</hl>, covers the entire city, and runs until midnight. It's cheap (about ₩1,400 per ride), air-conditioned, and has English signs at every station.<br><br>Essential tips:<br>• Get a <hl>T-money card (티머니)</hl> from any convenience store — tap in and out for discounts<br>• <hl>Line 2 (green)</hl> is the most-used line, circling the city<br>• <hl>Quiet cars</hl> exist — no calls, no loud music<br>• Phone signal works everywhere underground!"
        },
        "drama": {
          "lines": [
            "조심해!",
            "괜찮아?"
          ],
          "reading": "jo-sim-hae! / gwaen-cha-na?",
          "japanese": "\"Be careful!\" / \"Are you okay?\"",
          "note": "These come up constantly in K-dramas. 조심해 is casual — say 조심하세요 to strangers ✨"
        },
        "summary": [
          {
            "korean": "어디서 갈아타요?",
            "reading": "eo-di-seo ga-ra-ta-yo?"
          },
          {
            "korean": "명동에 가고 싶어요.",
            "reading": "myeong-dong-e ga-go si-peo-yo."
          },
          {
            "korean": "홍대에 가고 싶어요.",
            "reading": "hong-dae-e ga-go si-peo-yo."
          },
          {
            "korean": "출구",
            "reading": "chul-gu (exit)"
          }
        ]
      }
    ]
  },
  "lesson5": {
    "id": "lesson5",
    "stage": 5,
    "stageTitle": "At the Market",
    "appTitle": "Seoul Korean",
    "character": {
      "default": "images/1.png",
      "correct": "images/2.png",
      "wrong": "images/3.png",
      "cheer": "images/4.png",
      "complete": "images/6.png"
    },
    "sections": [
      {
        "type": "phrase",
        "stepLabel": "Today's Phrase",
        "stepTitle": "Shop like a local at Namdaemun!",
        "character": {
          "img": "images/1.png",
          "msg": "Shopping time!<br>Let's bargain! 🛍️"
        },
        "korean": "얼마예요?",
        "reading": "eol-ma-ye-yo?",
        "meaning": "How much is it?",
        "audioKey": "얼마예요",
        "scenes": [
          {
            "icon": "🛍️",
            "text": "At Namdaemun Market or Dongdaemun — point at something and ask the price!"
          },
          {
            "icon": "🍢",
            "text": "Street food stalls — ask before you eat!"
          },
          {
            "icon": "🧧",
            "text": "Souvenir shops, clothing stores, anywhere you want to know the price."
          }
        ]
      },
      {
        "type": "compare",
        "stepLabel": "English vs Korean",
        "stepTitle": "Korean numbers for prices — easier than you think!",
        "character": {
          "img": "images/1.png",
          "msg": "만 원 = 10,000 won!<br>Now you know 💰"
        },
        "japanese": {
          "sentence": "How much\nis it?",
          "reading": "English: 'How much'"
        },
        "korean": {
          "sentence": "얼마\n예요?",
          "reading": "eol-ma-ye-yo? — 얼마 = how much"
        },
        "insight": "Korean uses 만 (man) = 10,000 as a key unit. <strong>만 원 = ₩10,000 (about $7)</strong>. So 이만 원 = ₩20,000, 오만 원 = ₩50,000. Most market prices are in the thousands: 오천 원 = ₩5,000, 천 원 = ₩1,000.",
        "vocab": [
          {
            "korean": "얼마",
            "japanese": "eol-ma → how much 💰"
          },
          {
            "korean": "원",
            "japanese": "won → Korean won ₩"
          },
          {
            "korean": "천",
            "japanese": "cheon → 1,000 (1K)"
          },
          {
            "korean": "만",
            "japanese": "man → 10,000 (10K)"
          },
          {
            "korean": "할인",
            "japanese": "ha-rin → discount 🏷️"
          },
          {
            "korean": "영수증",
            "japanese": "yeong-su-jeung → receipt 🧾"
          }
        ]
      },
      {
        "type": "pattern",
        "stepLabel": "Pattern Practice",
        "stepTitle": "Ask for what you want!",
        "character": {
          "img": "images/4.png",
          "msg": "Shop smarter<br>with these! 🛍️"
        },
        "instruction": "\"이거 ___ 있어요?\" = \"Do you have this in ___?\" Try each option! 👇",
        "template": {
          "korean": "이거 ___ 있어요?",
          "reading": "(tap a word below)",
          "japanese": "Do you have this in ___?",
          "readingTemplate": "i-geo ___ is-seo-yo?",
          "japaneseTemplate": "Do you have this in ___?"
        },
        "words": [
          {
            "korean": "다른 색",
            "reading": "da-reun saek",
            "japanese": "other color",
            "audioKey": "이거 다른 색 있어요"
          },
          {
            "korean": "더 큰 거",
            "reading": "deo keun geo",
            "japanese": "bigger size",
            "audioKey": "이거 더 큰 거 있어요"
          },
          {
            "korean": "더 작은 거",
            "reading": "deo ja-geun geo",
            "japanese": "smaller size",
            "audioKey": "이거 더 작은 거 있어요"
          },
          {
            "korean": "다른 디자인",
            "reading": "da-reun di-ja-in",
            "japanese": "other design",
            "audioKey": "이거 다른 디자인 있어요"
          }
        ]
      },
      {
        "type": "quiz",
        "stepLabel": "Mini Quiz",
        "stepTitle": "Let's check what you remember!",
        "character": {
          "img": "images/1.png",
          "msg": "Quiz time!<br>You've got this! 😊"
        },
        "questions": [
          {
            "icon": "🛍️",
            "question": "How do you ask \"How much is it?\"",
            "sub": "Think back to today's phrase!",
            "options": [
              {
                "korean": "이거 주세요",
                "reading": "i-geo ju-se-yo",
                "correct": false
              },
              {
                "korean": "얼마예요?",
                "reading": "eol-ma-ye-yo?",
                "correct": true
              },
              {
                "korean": "있어요?",
                "reading": "is-seo-yo?",
                "correct": false
              }
            ],
            "correctMsg": "Correct! 얼마예요? — two syllables and you can use it anywhere you want to know the price!",
            "wrongMsg": "Not quite! 얼마예요? (eol-ma-ye-yo?) — 얼마 = how much, 예요 = is/are."
          },
          {
            "icon": "🎨",
            "question": "How do you ask \"Do you have this in another color?\"",
            "sub": "Think back to the pattern practice!",
            "options": [
              {
                "korean": "이거 더 큰 거 있어요?",
                "reading": "i-geo deo keun geo is-seo-yo?",
                "correct": false
              },
              {
                "korean": "이거 다른 색 있어요?",
                "reading": "i-geo da-reun saek is-seo-yo?",
                "correct": true
              },
              {
                "korean": "이거 다른 디자인 있어요?",
                "reading": "i-geo da-reun di-ja-in is-seo-yo?",
                "correct": false
              }
            ],
            "correctMsg": "Perfect! 이거 다른 색 있어요? — 다른 = other/different, 색 = color.",
            "wrongMsg": "Not quite! 이거 다른 색 있어요? — 다른 색 = other color. 이거 = this."
          }
        ]
      },
      {
        "type": "culture",
        "stepLabel": "Culture Note",
        "stepTitle": "Seoul's legendary markets",
        "character": {
          "img": "images/6.png",
          "msg": "Lesson complete!<br>You're amazing! 🎉"
        },
        "culture": {
          "icon": "🏪",
          "title": "Namdaemun & Dongdaemun: the shopping Meccas",
          "body": "<hl>남대문시장 (Namdaemun Market)</hl> is one of the oldest and largest traditional markets in Korea — open since 1414! You can find clothes, food, accessories, and souvenirs at incredible prices.<br><br>Bargaining tips:<br>• <hl>\"<kr>조금 깎아 주세요</kr> (jo-geum kka-kka ju-se-yo)\"</hl> = 'Please give me a little discount'<br>• Buying multiple items? Ask: <hl>\"<kr>두 개 사면 얼마예요</kr>?\"</hl> = 'How much for two?'<br><br>Market etiquette: <hl>bargaining is expected</hl> at traditional markets, but fixed-price stores (편의점, department stores) have set prices."
        },
        "drama": {
          "lines": [
            "이거 살까?",
            "너무 비싸!"
          ],
          "reading": "i-geo sal-kka? / neo-mu bi-ssa!",
          "japanese": "\"Should I buy this?\" / \"Too expensive!\"",
          "note": "너무 = 'too / very' — drama characters say this ALL the time ✨"
        },
        "summary": [
          {
            "korean": "얼마예요?",
            "reading": "eol-ma-ye-yo?"
          },
          {
            "korean": "조금 깎아 주세요",
            "reading": "jo-geum kka-kka ju-se-yo"
          },
          {
            "korean": "이거 다른 색 있어요?",
            "reading": "i-geo da-reun saek is-seo-yo?"
          },
          {
            "korean": "이거 더 큰 거 있어요?",
            "reading": "i-geo deo keun geo is-seo-yo?"
          }
        ]
      }
    ]
  },
  "lesson6": {
    "id": "lesson6",
    "stage": 6,
    "stageTitle": "React Like a Local",
    "appTitle": "Seoul Korean",
    "character": {
      "default": "images/1.png",
      "correct": "images/2.png",
      "wrong": "images/3.png",
      "cheer": "images/4.png",
      "complete": "images/6.png"
    },
    "sections": [
      {
        "type": "phrase",
        "stepLabel": "Today's Phrase",
        "stepTitle": "React to everything with full energy!",
        "character": {
          "img": "images/1.png",
          "msg": "This is the most<br>fun phrase! 🤩"
        },
        "korean": "진짜 대박이에요!",
        "reading": "jin-jja dae-ba-gi-e-yo!",
        "meaning": "This is absolutely amazing! / No way!",
        "audioKey": "진짜 대박이에요",
        "scenes": [
          {
            "icon": "🍖",
            "text": "You try Korean BBQ for the first time. This is the only acceptable response."
          },
          {
            "icon": "🌆",
            "text": "You see the Seoul skyline from Namsan Tower at night. Say it out loud!"
          },
          {
            "icon": "🎤",
            "text": "Your Korean friend does something impressive. React naturally!"
          }
        ]
      },
      {
        "type": "compare",
        "stepLabel": "English vs Korean",
        "stepTitle": "Korean slang you've been hearing in K-dramas!",
        "character": {
          "img": "images/1.png",
          "msg": "대박! You already<br>knew this one! 😄"
        },
        "japanese": {
          "sentence": "This is\namazing!",
          "reading": "English: adjective at the end"
        },
        "korean": {
          "sentence": "진짜\n대박이에요!",
          "reading": "jin-jja dae-ba-gi-e-yo! — really + daebak + it is!"
        },
        "insight": "<strong>진짜 (jin-jja)</strong> = really / truly / seriously. <strong>대박 (dae-bak)</strong> started as slang but is now everyday Korean — it means amazing, jackpot, no way! Add 이에요 to make it a sentence. You can also just shout '대박!' on its own.",
        "vocab": [
          {
            "korean": "진짜",
            "japanese": "jin-jja → really / seriously 😮"
          },
          {
            "korean": "대박",
            "japanese": "dae-bak → amazing / jackpot 🎉"
          },
          {
            "korean": "헐",
            "japanese": "heol → OMG / no way 😱"
          },
          {
            "korean": "완전",
            "japanese": "wan-jeon → totally / completely 💯"
          },
          {
            "korean": "최고",
            "japanese": "choe-go → the best 🏆"
          },
          {
            "korean": "레전드",
            "japanese": "re-jeon-deu → legend 👑"
          }
        ]
      },
      {
        "type": "pattern",
        "stepLabel": "Pattern Practice",
        "stepTitle": "진짜 + anything = instant expression!",
        "character": {
          "img": "images/4.png",
          "msg": "진짜 everything!<br>Go for it! 🤩"
        },
        "instruction": "\"진짜 ___\" = \"Really ___\" or \"This is really ___\". Try each one! 👇",
        "template": {
          "korean": "진짜 ___",
          "reading": "(tap a word below)",
          "japanese": "Really ___!",
          "readingTemplate": "jin-jja ___",
          "japaneseTemplate": "Really ___!"
        },
        "words": [
          {
            "korean": "대박이에요",
            "reading": "dae-ba-gi-e-yo",
            "japanese": "amazing!",
            "audioKey": "진짜 대박이에요"
          },
          {
            "korean": "대박",
            "reading": "dae-bak",
            "japanese": "amazing! (excl.)",
            "audioKey": "진짜 대박"
          },
          {
            "korean": "맛있어",
            "reading": "ma-si-sseo",
            "japanese": "delicious! (casual)",
            "audioKey": "진짜 맛있어"
          },
          {
            "korean": "예쁘다",
            "reading": "ye-ppeu-da",
            "japanese": "pretty! (casual)",
            "audioKey": "진짜 예쁘다"
          }
        ]
      },
      {
        "type": "quiz",
        "stepLabel": "Mini Quiz",
        "stepTitle": "Let's check what you remember!",
        "character": {
          "img": "images/1.png",
          "msg": "Last quiz of<br>the season! 🎉"
        },
        "questions": [
          {
            "icon": "🍖",
            "question": "You just tried Korean BBQ and it's incredible. What do you say?",
            "sub": "Use today's phrase!",
            "options": [
              {
                "korean": "진짜 대박이에요!",
                "reading": "jin-jja dae-ba-gi-e-yo!",
                "correct": true
              },
              {
                "korean": "조금 깎아 주세요",
                "reading": "jo-geum kka-kka ju-se-yo",
                "correct": false
              },
              {
                "korean": "체크인 하려고요",
                "reading": "che-keu-in ha-ryeo-go-yo",
                "correct": false
              }
            ],
            "correctMsg": "Yes!! 진짜 대박이에요! is the perfect response. Koreans will love your enthusiasm!",
            "wrongMsg": "Not quite! 진짜 대박이에요! is your go-to reaction to anything amazing — food, views, surprises!"
          },
          {
            "icon": "🎭",
            "question": "What does 진짜 mean?",
            "sub": "Think about how you've heard it in K-dramas!",
            "options": [
              {
                "korean": "감사합니다",
                "reading": "gam-sa-ham-ni-da (thank you)",
                "correct": false
              },
              {
                "korean": "맛있어",
                "reading": "ma-si-sseo (delicious)",
                "correct": false
              },
              {
                "korean": "진짜",
                "reading": "jin-jja (really / seriously / OMG)",
                "correct": true
              }
            ],
            "correctMsg": "Correct! 진짜 = really / seriously / for real. It's one of the most useful intensifiers in Korean!",
            "wrongMsg": "Not quite! 진짜 (jin-jja) means 'really / seriously / for real' — you've definitely heard it in K-dramas!"
          }
        ]
      },
      {
        "type": "culture",
        "stepLabel": "Culture Note",
        "stepTitle": "You've completed Season 1! 🎉",
        "character": {
          "img": "images/6.png",
          "msg": "Season 1 complete!<br>You're incredible! 🏆"
        },
        "culture": {
          "icon": "🇰🇷",
          "title": "You're ready for Seoul!",
          "body": "You now know how to:<br>✅ Get attention: <hl><kr>저기요!</kr></hl><br>✅ Order food and drinks: <hl><kr>___ 주세요</kr></hl><br>✅ Check into your hotel: <hl><kr>체크인 하려고요</kr></hl><br>✅ Navigate the subway: <hl><kr>어디서 갈아타요?</kr></hl><br>✅ Shop at markets: <hl><kr>얼마예요?</kr></hl><br>✅ React like a local: <hl><kr>진짜 대박이에요!</kr></hl><br><br>Most importantly — Koreans absolutely <hl>love when foreigners try Korean</hl>. Even one word will make someone smile. You've got this. <hl>화이팅! (hwa-i-ting!)</hl> — Go for it!"
        },
        "drama": {
          "lines": [
            "화이팅!",
            "할 수 있어!"
          ],
          "reading": "hwa-i-ting! / hal su i-sseo!",
          "japanese": "\"Fighting! / You can do it!\" — a Korean cheer",
          "note": "화이팅 comes from the English word 'fighting' — it's a cheer of encouragement. You'll hear it everywhere ✨"
        },
        "summary": [
          {
            "korean": "진짜 대박이에요!",
            "reading": "jin-jja dae-ba-gi-e-yo!"
          },
          {
            "korean": "진짜 맛있어",
            "reading": "jin-jja ma-si-sseo"
          },
          {
            "korean": "대박",
            "reading": "dae-bak"
          },
          {
            "korean": "화이팅!",
            "reading": "hwa-i-ting!"
          }
        ]
      }
    ]
  }
};
