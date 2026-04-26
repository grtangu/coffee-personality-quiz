'use client';

import { useState } from 'react';
import Image from 'next/image';

const personalities = [
  {
    id: 'bold',
    name: 'Bold Adventurer',
    coffee: 'Double Espresso',
    tagline: 'You live for intensity',
    image: '/espresso.jpg',
    color: 'from-rose-500 to-orange-400',
    badge: 'bg-rose-100 text-rose-700',
    border: 'border-rose-300',
  },
  {
    id: 'zen',
    name: 'Zen Minimalist',
    coffee: 'Black Coffee, Single Origin',
    tagline: 'Simple. Clean. Perfect.',
    image: '/pour-over.jpg',
    color: 'from-teal-500 to-emerald-400',
    badge: 'bg-teal-100 text-teal-700',
    border: 'border-teal-300',
  },
  {
    id: 'practical',
    name: 'Practical Pragmatist',
    coffee: 'Large Drip, Whatever\'s Fresh',
    tagline: 'Just make it work',
    image: '/drip-coffee.jpg',
    color: 'from-amber-500 to-yellow-400',
    badge: 'bg-amber-100 text-amber-700',
    border: 'border-amber-300',
  },
];

const questions = [
  {
    text: 'Your ideal Saturday morning looks like...',
    answers: [
      { emoji: '🏔️', text: 'Up at dawn, pack a bag, go somewhere new', personality: 'bold' },
      { emoji: '🧘', text: 'Slow morning, one perfect cup, total silence', personality: 'zen' },
      { emoji: '✅', text: 'Productive — errands done, inbox cleared, coffee in hand', personality: 'practical' },
    ],
  },
  {
    text: 'How do you order at a restaurant?',
    answers: [
      { emoji: '🌶️', text: 'Whatever sounds most interesting or challenging', personality: 'bold' },
      { emoji: '📖', text: 'Read the whole menu, pick the dish done best here', personality: 'zen' },
      { emoji: '🍽️', text: 'Something reliable — you know what you like', personality: 'practical' },
    ],
  },
  {
    text: 'Your travel style is...',
    answers: [
      { emoji: '🗺️', text: 'Book a flight, figure out the rest when you land', personality: 'bold' },
      { emoji: '🏡', text: 'One destination, deeply explored', personality: 'zen' },
      { emoji: '📋', text: 'Itinerary planned, hotels booked, no surprises', personality: 'practical' },
    ],
  },
  {
    text: 'Your workspace looks like...',
    answers: [
      { emoji: '🌍', text: 'Wherever you are — coffee shop, airport, park bench', personality: 'bold' },
      { emoji: '🪴', text: 'Minimal, clean, everything in its place', personality: 'zen' },
      { emoji: '🖥️', text: 'Functional — what matters is getting the work done', personality: 'practical' },
    ],
  },
  {
    text: 'When trying something new, you...',
    answers: [
      { emoji: '🚀', text: 'Dive in headfirst — figure it out as you go', personality: 'bold' },
      { emoji: '🔬', text: 'Research deeply first, then commit fully', personality: 'zen' },
      { emoji: '📝', text: 'Look for the most reliable, proven approach', personality: 'practical' },
    ],
  },
];

function calculateResults(answers: string[]) {
  const counts: Record<string, number> = { bold: 0, zen: 0, practical: 0 };
  answers.forEach((a) => counts[a]++);
  return personalities
    .map((p) => ({ ...p, count: counts[p.id], pct: Math.round((counts[p.id] / answers.length) * 100) }))
    .sort((a, b) => b.count - a.count);
}

export default function Home() {
  const [screen, setScreen] = useState<'intro' | 'quiz' | 'results'>('intro');
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  function handleAnswer(personality: string) {
    const next = [...answers, personality];
    if (next.length === questions.length) {
      setAnswers(next);
      setScreen('results');
    } else {
      setAnswers(next);
      setCurrent(current + 1);
    }
  }

  function restart() {
    setScreen('intro');
    setCurrent(0);
    setAnswers([]);
  }

  const results = screen === 'results' ? calculateResults(answers) : [];
  const [top, ...rest] = results;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-yellow-300 to-teal-400 flex items-center justify-center p-4">

      {/* INTRO */}
      {screen === 'intro' && (
        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center">
          <div className="text-6xl mb-4">☕</div>
          <div className="inline-block bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Basecamp Coffee
          </div>
          <h1 className="text-3xl font-black text-gray-900 mb-3 leading-tight">
            What&apos;s Your Coffee Personality?
          </h1>
          <p className="text-gray-500 mb-8 text-base leading-relaxed">
            5 quick questions. Find your perfect match.
          </p>
          <button
            onClick={() => setScreen('quiz')}
            className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold text-lg py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg"
          >
            Start the Quiz →
          </button>
        </div>
      )}

      {/* QUIZ */}
      {screen === 'quiz' && (
        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg w-full">
          {/* Progress dots */}
          <div className="flex gap-2 mb-6">
            {questions.map((_, i) => (
              <div
                key={i}
                className={`h-2.5 flex-1 rounded-full transition-all ${
                  i < answers.length ? 'bg-pink-500' : i === current ? 'bg-pink-300' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>

          <div className="inline-block bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Question {current + 1} of {questions.length}
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 leading-snug">
            {questions[current].text}
          </h2>

          <div className="flex flex-col gap-3">
            {questions[current].answers.map((answer, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(answer.personality)}
                className="flex items-center gap-4 border-2 border-gray-200 rounded-2xl px-5 py-4 text-left font-semibold text-gray-700 hover:border-pink-400 hover:bg-pink-50 hover:-translate-y-0.5 transition-all"
              >
                <span className="text-2xl">{answer.emoji}</span>
                <span>{answer.text}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* RESULTS */}
      {screen === 'results' && top && (
        <div className="max-w-lg w-full flex flex-col gap-4">

          {/* Primary result */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className={`bg-gradient-to-r ${top.color} p-6 text-white`}>
              <div className="text-sm font-bold uppercase tracking-widest opacity-80 mb-1">Your Coffee Personality</div>
              <h2 className="text-3xl font-black">{top.name}</h2>
              <p className="opacity-90 mt-1">{top.tagline}</p>
            </div>
            <div className="p-6 flex gap-5 items-center">
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
                <Image src={top.image} alt={top.coffee} fill className="object-cover" />
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">Your perfect cup</div>
                <div className="text-xl font-black text-gray-900">{top.coffee}</div>
                <div className="mt-2 inline-block bg-gray-100 text-gray-600 text-sm font-bold px-3 py-1 rounded-full">
                  {top.pct}% match
                </div>
              </div>
            </div>
          </div>

          {/* Secondary results */}
          <div className="bg-white rounded-3xl shadow-xl p-5">
            <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-4">Your full breakdown</div>
            <div className="flex flex-col gap-3">
              {results.map((r) => (
                <div key={r.id} className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                    <Image src={r.image} alt={r.coffee} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-gray-800 text-sm">{r.name}</span>
                      <span className="text-sm font-bold text-gray-500">{r.pct}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${r.color} rounded-full`}
                        style={{ width: `${r.pct}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={restart}
            className="w-full bg-white text-gray-700 font-bold py-4 rounded-2xl shadow-lg hover:bg-gray-50 hover:-translate-y-0.5 transition-all border-2 border-gray-200"
          >
            Take it again ↺
          </button>
        </div>
      )}
    </div>
  );
}
