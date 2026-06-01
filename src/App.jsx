import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Feather, Scale, Sparkles, Heart, Compass, BookOpen, RotateCcw, Plus, Minus, Users, Church, ArrowRight, Lock, GraduationCap, NotebookPen, Star, Check } from "lucide-react";

function Medallion({ name, tone }) {
  const initials = name.split(" ").map((w) => w[0]).slice(0, 2).join("");
  const bg = tone === "believer" ? "bg-amber-100 text-amber-800 border-amber-200" : tone === "skeptic" ? "bg-slate-100 text-slate-700 border-slate-300" : "bg-stone-100 text-stone-600 border-stone-300";
  return <div className={`w-11 h-11 rounded-full border flex items-center justify-center text-sm shrink-0 ${bg}`} style={{ fontFamily: "system-ui", fontWeight: 600 }}>{initials}</div>;
}

const ARGUMENTS = [
  {
    id: "contingency", short: "The Argument from Contingency", title: "Why does anything exist at all?",
    example: "Imagine finding a glowing orb in a forest. You'd ask what explains it. Now imagine the forest, the planet, the whole universe — Leibniz's question is why the entire chain of dependent things exists rather than nothing. Each thing borrows its existence from another; what does the whole series borrow from?",
    forCase: "Contingent things — things that could have failed to exist — don't carry the reason for their own existence within themselves. A complete explanation, the argument runs, eventually requires something that exists necessarily, by its own nature: a ground that doesn't itself need a further ground.",
    forDeeper: "This is not the crude 'everything has a cause, so God.' The Leibnizian version invokes a Principle of Sufficient Reason: for every fact, there is an explanation. Even an infinite past wouldn't help, because an infinite chain of contingent links is itself a contingent fact still in need of explanation. The conclusion is modest — a necessary being — and only later argument tries to identify it with God.",
    againstCase: "Why think the Principle of Sufficient Reason is true? Perhaps the universe is simply a brute fact — it exists, with no further explanation, and demanding one is a category mistake. Or perhaps the universe itself is the necessary being. Calling the terminus 'God' rather than 'the quantum vacuum' smuggles in far more than the argument earns.",
    againstDeeper: "Graham Oppy and others argue that if you're allowed one unexplained necessary thing, parsimony favors making it the physical universe rather than a mind with intentions, knowledge, and power. The theist must show why a personal necessary being is more probable than an impersonal necessary substrate — and that step is where most of the real work, and most of the disagreement, lives.",
    sources: ["Alexander Pruss, 'The Leibnizian Cosmological Argument,' in The Blackwell Companion to Natural Theology (2009)", "Reichenbach, 'Cosmological Argument,' Stanford Encyclopedia of Philosophy", "Graham Oppy, Arguing about Gods (Cambridge UP, 2006) — the naturalist reply"],
    voices: [{ name: "Gottfried Leibniz", tone: "believer", note: "Philosopher-mathematician who framed the modern contingency argument; saw a necessary being as the only sufficient reason for the world." }, { name: "Bertrand Russell", tone: "skeptic", note: "In his 1948 BBC debate with Copleston, held that the universe is 'just there, and that's all' — a brute fact needing no explanation." }],
  },
  {
    id: "finetuning", short: "The Fine-Tuning Argument", title: "Why is the universe set up so precisely for life?",
    example: "If the cosmological constant — the energy density of empty space — differed from its value by a fraction with dozens of zeros, no galaxies, stars, or chemistry could form. Physicist Martin Rees catalogued six such numbers, each balanced, in his book 'Just Six Numbers.' Shift any one and the universe goes sterile.",
    forCase: "A life-permitting universe is enormously improbable under a single, undesigned universe, but unsurprising if a mind intended embodied agents. Using the tools of confirmation theory, the fine-tuning evidence raises the probability of theism relative to naturalism. The argument is comparative and probabilistic, not a knock-down proof.",
    forDeeper: "Robin Collins frames it carefully: P(fine-tuning | naturalistic single universe) is very low, while P(fine-tuning | theism) is not low, so the evidence confirms theism over that rival. He spends most of his effort answering the multiverse objection — arguing a multiverse-generator itself looks fine-tuned, pushing the question back a level rather than dissolving it.",
    againstCase: "If a vast multiverse exists, some region will be life-permitting, and observers can only ever find themselves in such a region — a selection effect, not design. We also have a sample size of one universe and no independent grip on how the constants 'could' have been, which makes the probabilities suspect.",
    againstDeeper: "Sean Carroll argues that a maximally powerful God could create life under any laws, so fine-tuning isn't even predicted by theism — undercutting the likelihood claim. Critics like Mark Saward also press that Collins's likelihood structure doesn't deliver a posterior probability for God. Recent work (Bradford Saad, 2024) even argues fine-tuning should raise our confidence in other universes.",
    sources: ["Robin Collins, 'The Teleological Argument,' in The Blackwell Companion to Natural Theology (2009), pp. 202–281", "Neil Manson, 'The Fine-Tuning Argument,' Philosophy Compass 4:1 (2009)", "Sean Carroll, 'Does the Universe Need God?' (2012) — the naturalist reply", "Martin Rees, Just Six Numbers (Basic Books, 2000)"],
    voices: [{ name: "Georges Lemaître", tone: "believer", note: "Catholic priest and cosmologist who first proposed the Big Bang ('primeval atom') — yet warned against reading Genesis directly into physics." }, { name: "Sean Carroll", tone: "skeptic", note: "Theoretical physicist and naturalist; argues the universe is self-contained and needs no external cause or designer." }],
  },
  {
    id: "moral", short: "The Moral Argument", title: "Is evil real — and if so, what does that imply?",
    example: "Consider the torture of a child for entertainment. Almost everyone feels this is not merely unfashionable or evolutionarily costly, but genuinely, objectively wrong — wrong even in a society that approved of it. That conviction is the strongest datum in all of ethics. The argument asks: what kind of world makes that conviction true?",
    forCase: "If real evil exists, then real good does too, and objective moral facts are not the sort of thing a universe of indifferent particles seems able to produce or make binding. A reality grounded in a being that is itself the standard of goodness offers a more natural home for facts that obligate us.",
    forDeeper: "Robert Adams develops a sophisticated version: the best candidate for 'the Good itself' is a perfect being, and moral obligations are best understood as the demands of a loving relationship rather than free-floating imperatives. Crucially, this is the hinge of the whole app — the same reality of evil that fuels the problem of evil (an objection) here becomes evidence for moral realism (a clue toward theism).",
    againstCase: "Morality can be objective without God. Evolution explains our moral sense; reason and human flourishing can ground its content, the way mathematical truths hold without a divine mathematician. And the Euthyphro dilemma bites: is the good good because God wills it (then it's arbitrary), or does God will it because it's good (then goodness is independent of God)?",
    againstDeeper: "Erik Wielenberg defends 'robust ethics' — objective moral facts as brute necessary truths, no more mysterious than logic. Theists reply that grounding goodness in God's nature dissolves the Euthyphro dilemma (goodness is neither above God nor arbitrarily willed, but identical to what God essentially is). The dispute turns on whether non-natural moral facts are more or less puzzling than a necessary moral being.",
    sources: ["Robert Adams, Finite and Infinite Goods (Oxford UP, 1999)", "C. Stephen Evans, 'Moral Arguments for the Existence of God,' Stanford Encyclopedia of Philosophy", "Erik Wielenberg, Robust Ethics (Oxford UP, 2014) — the naturalist reply"],
    voices: [{ name: "Fyodor Dostoevsky", tone: "believer", note: "Orthodox Christian whose novels (esp. The Brothers Karamazov) probed whether, without God, 'everything is permitted' — while voicing doubt powerfully through his characters." }, { name: "Friedrich Nietzsche", tone: "skeptic", note: "Declared 'God is dead' and argued that abandoning God meant abandoning the Christian moral framework too — a challenge to both believers and secular moralists." }],
  },
  {
    id: "consciousness", short: "The Argument from Consciousness", title: "How does matter become a mind that feels?",
    example: "Mary the color scientist knows every physical fact about color vision, but has lived in a black-and-white room. The day she steps outside and sees red, does she learn something new? If yes, then there are facts about experience that no amount of physical information captures.",
    forCase: "Subjective experience — what it is like to taste coffee or feel grief — seems to resist full explanation in physical terms. If the deepest layer of reality is mind-like rather than mere matter, our own conscious inner life is less of an inexplicable anomaly and more of a clue to the character of the whole.",
    forDeeper: "David Chalmers calls this the 'hard problem': even a complete physics leaves open why any of it is accompanied by experience. Some theists (e.g., Ben Page, Faith and Philosophy 2020) argue that a fundamental divine mind explains the existence of finite minds better than emergence-from-matter does. The argument is abductive — inference to the best explanation, not deduction.",
    againstCase: "Hard problems have a history of yielding to science (life once seemed to need a special 'vital force'). Invoking a cosmic mind explains one mystery by appeal to a larger one. And present ignorance about consciousness is just that — ignorance — not positive evidence for any metaphysics, theist or otherwise.",
    againstDeeper: "Daniel Dennett argues the 'hard problem' rests on an illusion about the nature of experience that careful analysis dissolves. Even granting the problem, panpsychism (mind as a basic feature of matter) is a live naturalist option that needs no God. The theist must show divine mind beats these rivals, not merely that physicalism is incomplete.",
    sources: ["David Chalmers, 'Facing Up to the Problem of Consciousness,' J. of Consciousness Studies (1995); The Conscious Mind (1996)", "Ben Page, 'Arguing to Theism from Consciousness,' Faith and Philosophy 37:3 (2020)", "Daniel Dennett, Consciousness Explained (1991) — the physicalist reply"],
    voices: [{ name: "John Polkinghorne", tone: "believer", note: "Particle physicist turned Anglican priest; argued that human consciousness and rationality point beyond a purely mechanistic account of the world." }, { name: "Richard Dawkins", tone: "skeptic", note: "Evolutionary biologist; holds that mind is a product of natural selection and that appeals to a designer explain nothing." }],
  },
  {
    id: "experience", short: "The Argument from Religious Experience", title: "What should we make of religious experience?",
    example: "A grieving widow describes a sudden, overwhelming sense of being held and accompanied. A Zen practitioner reports the dissolution of the self. Mystics across centuries and unconnected cultures report strikingly convergent encounters with a presence beyond the ordinary. Do we dismiss all of this, or weigh it?",
    forCase: "We ordinarily trust experience as evidence unless we have specific reason to doubt it — Swinburne calls this the Principle of Credulity. If millions across cultures report perceiving a divine reality, that testimony carries at least some evidential weight, much as sense experience does for the physical world.",
    forDeeper: "William Alston argues that religious experience can constitute a genuine perceptual practice, internally as reliable-seeming as ordinary perception. William James catalogued its noetic quality and life-transforming fruits. The claim is not that any single vision proves God, but that the cumulative testimony is data a complete worldview must explain rather than ignore.",
    againstCase: "These experiences conflict across religions (a Christian meets Christ, a Hindu meets Krishna), which undercuts their reliability as evidence for any one of them. And they correlate with temporal-lobe activity, fasting, grief, and psychedelics — naturalistic triggers that produce the feeling of presence without any presence.",
    againstDeeper: "Critics note we don't extend the Principle of Credulity to dreams or hallucinations, and ask why religious perception is different. The conflicting-claims problem suggests the experiences track culture and expectation, not a common object. Defenders reply that conflicting reports of a mountain don't prove the mountain unreal — but the disanalogy is contested.",
    sources: ["William James, The Varieties of Religious Experience (1902)", "William Alston, Perceiving God (Cornell UP, 1991); Richard Swinburne, The Existence of God (2004)", "'Religious Experience,' Stanford Encyclopedia of Philosophy — overview of objections"],
    voices: [{ name: "Blaise Pascal", tone: "believer", note: "Mathematician and physicist; after an intense mystical experience in 1654 sewed an account of it ('Fire...') into his coat, carried until death." }, { name: "Sigmund Freud", tone: "skeptic", note: "Interpreted the 'oceanic feeling' of religious experience as a psychological residue of infancy rather than perception of anything real." }],
  },
  {
    id: "evil", short: "The Problem of Evil", title: "If God is good, why is there so much suffering?", isObjection: true,
    example: "Dostoevsky's Ivan Karamazov refuses to accept any heavenly harmony bought with the unavenged tears of one tortured child. A fawn burns slowly to death in a forest fire no human ever sees (William Rowe's example). What good could possibly require that?",
    forCase: "This is the most powerful case against theism. An all-good, all-powerful being would prevent gratuitous suffering — suffering that serves no greater good. Yet the world overflows with apparently pointless agony. The evidential version concludes that such suffering makes the existence of God significantly less likely.",
    forDeeper: "Mackie's logical version claimed outright contradiction between God and any evil. Rowe's evidential version is subtler: even if some evil is compatible with God, the sheer scale of seemingly pointless suffering is strong inductive evidence against him. The horror is not just philosophical — it is the reason many sincere people walk away.",
    againstCase: "Genuine freedom and moral growth may require a world of stable laws where harm is possible. And we may be in a poor position to judge that a given evil is truly gratuitous — limited vantage point, limited knowledge of consequences. This doesn't erase the problem, but it weakens the inference from 'I see no good reason' to 'there is no good reason.'",
    againstDeeper: "Plantinga's free-will defense showed the logical problem fails: God and evil are not strictly contradictory. Against the evidential version, 'skeptical theists' (Wykstra) argue our inability to see a justifying reason is weak evidence there is none, given how far a divine mind would exceed ours. Critics counter that this 'skepticism' corrodes our moral knowledge generally.",
    sources: ["J.L. Mackie, 'Evil and Omnipotence,' Mind (1955); William Rowe, 'The Problem of Evil and Some Varieties of Atheism,' APQ (1979)", "Alvin Plantinga, God, Freedom, and Evil (1974) — the free-will defense", "'The Problem of Evil,' Stanford Encyclopedia of Philosophy"],
    voices: [{ name: "Epicurus", tone: "skeptic", note: "Ancient source of the classic dilemma: is God willing to prevent evil but unable, able but unwilling, or neither?" }, { name: "Marilynne Robinson", tone: "believer", note: "Novelist and essayist (Gilead) who writes about suffering and grace from within a serious Calvinist Christian faith." }],
  },
  {
    id: "hiddenness", short: "Divine Hiddenness", title: "Why isn't God more obvious?", isObjection: true,
    example: "A person spends years sincerely seeking God — praying, reading, longing to believe — and meets only silence. Schellenberg's point: this isn't a stubborn skeptic, but a 'nonresistant nonbeliever.' If a loving God exists, why would such a person be left without the relationship they're reaching for?",
    forCase: "A perfectly loving God would want a relationship with every person open to one, and relationship requires belief that the other exists. So a loving God would ensure no nonresistant person fails to believe. But such people plainly exist. Therefore, the argument concludes, a loving God probably does not.",
    forDeeper: "Schellenberg formalizes this as a deductive argument paralleling the problem of evil — hiddenness is to love what suffering is to power. The force is existential as much as logical: the felt absence of God in honest seeking is, for many, the most personal reason for doubt.",
    againstCase: "Overwhelming evidence might compel belief while killing the freedom love requires — a coerced 'yes' is not love. Some hiddenness may preserve the space in which genuine, uncoerced seeking and trust can grow. What looks like silence may be the room a relationship needs in order to be freely chosen.",
    againstDeeper: "Responders (Moser, Howard-Snyder) argue God may be 'hidden' to the casually curious but available to those who seek with the moral seriousness the relationship calls for — so the relevant evidence is volitional, not merely intellectual. Critics reply this risks blaming the seeker, and that many nonresistant seekers remain in the dark regardless.",
    sources: ["J.L. Schellenberg, Divine Hiddenness and Human Reason (Cornell UP, 1993)", "Howard-Snyder & Moser (eds.), Divine Hiddenness: New Essays (Cambridge UP, 2002)", "'The Hiddenness Argument,' Stanford Encyclopedia of Philosophy"],
    voices: [{ name: "Mother Teresa", tone: "believer", note: "Her letters revealed decades of felt divine absence — a 'dark night' she endured while continuing to serve and believe." }, { name: "J.L. Schellenberg", tone: "skeptic", note: "Philosopher who developed the hiddenness argument into one of the most discussed contemporary cases against theism." }],
  },
];

const LEAN_LABELS = ["Leans against", "Unconvinced", "Open", "Intrigued", "Leans toward"];

const COURSES = [
  { id: "both-sides", title: "Both Sides, Step by Step", blurb: "Walk all seven questions in a guided sequence, with a reflection at each turn.", steps: ARGUMENTS.map((a) => a.id), intro: "Over the next seven steps you'll meet the strongest case for belief and the strongest case against, one question at a time. There are no right answers here — only the chance to see each argument clearly and notice your own response. Take your time.", outro: "You've now weighed all seven. Notice where you felt the strongest pull, in either direction — that's often more revealing than any single argument. Your leanings are saved to your journal, so you can return and see how they shift." },
  { id: "foundations", title: "Why Is There Anything?", blurb: "The cosmological questions — contingency and fine-tuning.", steps: ["contingency", "finetuning"], intro: "Two questions sit beneath all the others: why is there something rather than nothing, and why is that something so finely arranged for life? Both push at the edges of what physics alone can explain.", outro: "Notice that neither argument claims certainty — both are probabilistic, weighing one explanation against another. That modesty is a feature, not a weakness." },
  { id: "moral-universe", title: "The Moral Universe", blurb: "Morality and evil — the app's central hinge.", steps: ["moral", "evil"], intro: "Here is the heart of it. The reality of evil is the strongest case against God — and, turned around, the strongest clue that the universe contains real good and evil at all. Hold both at once.", outro: "If you cannot give up the conviction that some things are truly evil, you've already committed to moral realism. The open question is only what best explains it." },
];

const SK = { lean: "oq:leanings", hist: "oq:history", plus: "oq:plus" };

const store = {
  get: (k) => { try { const v = localStorage.getItem(k); return v == null ? null : { value: v }; } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch {} },
};

export default function App() {
  const [screen, setScreen] = useState("intro");
  const [idx, setIdx] = useState(0);
  const [leanings, setLeanings] = useState({});
  const [history, setHistory] = useState([]);
  const [openLayer, setOpenLayer] = useState({});
  const [isPlus, setIsPlus] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [course, setCourse] = useState(null);
  const [showPaywall, setShowPaywall] = useState(false);

  useEffect(() => {
    try { const r = store.get(SK.lean); if (r?.value) setLeanings(JSON.parse(r.value)); } catch {}
    try { const r = store.get(SK.hist); if (r?.value) setHistory(JSON.parse(r.value)); } catch {}
    try { const r = store.get(SK.plus); if (r?.value === "true") setIsPlus(true); } catch {}
    setLoaded(true);
  }, []);

  const persist = (key, val) => store.set(key, JSON.stringify(val));

  const setLean = (id, v) => {
    const next = { ...leanings, [id]: v };
    setLeanings(next); persist(SK.lean, next);
    const entry = { id, v, t: Date.now() };
    const nh = [...history, entry]; setHistory(nh); persist(SK.hist, nh);
  };

  const unlock = () => { setIsPlus(true); persist(SK.plus, "true"); setShowPaywall(false); };
  const toggle = (k) => setOpenLayer((p) => ({ ...p, [k]: !p[k] }));
  const gate = () => { setShowPaywall(true); };

  const arg = ARGUMENTS[idx];
  const explored = Object.keys(leanings).length;
  const vals = Object.values(leanings);
  const avg = vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : null;
  const reset = () => { setIdx(0); setOpenLayer({}); setCourse(null); setScreen("intro"); };

  const Btn = ({ children, onClick, variant = "primary" }) => (
    <button onClick={onClick} className={`flex items-center gap-2 px-6 py-2.5 rounded-full transition-colors ${variant === "primary" ? "bg-stone-800 text-stone-50 hover:bg-stone-700" : "text-stone-500 hover:text-stone-800"}`}>{children}</button>
  );

  const PlusTag = () => <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded" style={{ fontFamily: "system-ui", letterSpacing: "0.08em" }}><Star size={9} /> Plus</span>;

  const ArgumentCard = ({ a }) => (
    <>
      <div className="border-l-2 border-stone-300 pl-4 mb-6 text-stone-600 leading-relaxed italic">{a.example}</div>
      <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-5 mb-3">
        <div className="flex items-center gap-2 text-emerald-800 text-sm font-semibold mb-2" style={{ fontFamily: "system-ui" }}><Sparkles size={16} /> {a.isObjection ? "The force of the objection" : "The case for belief"}</div>
        <p className="leading-relaxed text-stone-700">{a.forCase}</p>
        {isPlus ? (<>
          <button onClick={() => toggle(a.id + "f")} className="mt-3 text-xs flex items-center gap-1 text-emerald-700 hover:text-emerald-900" style={{ fontFamily: "system-ui" }}>{openLayer[a.id + "f"] ? <Minus size={13} /> : <Plus size={13} />} Go deeper</button>
          {openLayer[a.id + "f"] && <p className="mt-2 text-sm leading-relaxed text-stone-600 border-t border-emerald-100 pt-3">{a.forDeeper}</p>}
        </>) : (<button onClick={gate} className="mt-3 text-xs flex items-center gap-1.5 text-stone-400 hover:text-amber-700" style={{ fontFamily: "system-ui" }}><Lock size={12} /> Go deeper <PlusTag /></button>)}
      </div>
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 mb-5">
        <div className="flex items-center gap-2 text-slate-700 text-sm font-semibold mb-2" style={{ fontFamily: "system-ui" }}><Scale size={16} /> {a.isObjection ? "The reply" : "The case against"}</div>
        <p className="leading-relaxed text-stone-700">{a.againstCase}</p>
        {isPlus ? (<>
          <button onClick={() => toggle(a.id + "a")} className="mt-3 text-xs flex items-center gap-1 text-slate-600 hover:text-slate-900" style={{ fontFamily: "system-ui" }}>{openLayer[a.id + "a"] ? <Minus size={13} /> : <Plus size={13} />} Go deeper</button>
          {openLayer[a.id + "a"] && <p className="mt-2 text-sm leading-relaxed text-stone-600 border-t border-slate-200 pt-3">{a.againstDeeper}</p>}
        </>) : (<button onClick={gate} className="mt-3 text-xs flex items-center gap-1.5 text-stone-400 hover:text-amber-700" style={{ fontFamily: "system-ui" }}><Lock size={12} /> Go deeper <PlusTag /></button>)}
      </div>
      <div className="mb-5">
        <div className="text-xs uppercase tracking-widest text-stone-400 mb-3" style={{ letterSpacing: "0.15em" }}>Voices on both sides</div>
        <div className="space-y-3">
          {a.voices.map((v) => (
            <div key={v.name} className="flex gap-3 items-start">
              <Medallion name={v.name} tone={v.tone} />
              <div><div className="text-sm text-stone-800">{v.name} <span className={`text-xs ${v.tone === "believer" ? "text-amber-700" : "text-slate-500"}`} style={{ fontFamily: "system-ui" }}>· {v.tone === "believer" ? "believer" : "skeptic"}</span></div><div className="text-sm text-stone-500 leading-snug">{v.note}</div></div>
            </div>
          ))}
        </div>
      </div>
      {isPlus ? (
        <details className="mb-6"><summary className="text-xs text-stone-400 hover:text-stone-700 cursor-pointer flex items-center gap-1.5" style={{ fontFamily: "system-ui" }}><BookOpen size={13} /> Peer-reviewed & canonical sources</summary><ul className="mt-2 space-y-1.5 pl-1">{a.sources.map((s, i) => <li key={i} className="text-xs text-stone-500 leading-snug" style={{ fontFamily: "system-ui" }}>· {s}</li>)}</ul></details>
      ) : (<button onClick={gate} className="mb-6 text-xs text-stone-400 hover:text-amber-700 flex items-center gap-1.5" style={{ fontFamily: "system-ui" }}><Lock size={12} /> Peer-reviewed & canonical sources <PlusTag /></button>)}
      <div className="mb-7">
        <div className="text-sm text-stone-500 mb-3" style={{ fontFamily: "system-ui" }}>Where do you lean after reading both sides?</div>
        <div className="flex gap-2">
          {LEAN_LABELS.map((label, i) => (<button key={i} onClick={() => setLean(a.id, i)} className={`flex-1 py-3 px-1 rounded-lg text-xs transition-all ${leanings[a.id] === i ? "bg-stone-800 text-stone-50 shadow" : "bg-white border border-stone-200 text-stone-500 hover:border-stone-400"}`} style={{ fontFamily: "system-ui" }}>{label}</button>))}
        </div>
      </div>
    </>
  );

  if (!loaded) return <div className="min-h-screen bg-stone-50 flex items-center justify-center text-stone-400" style={{ fontFamily: "Georgia, serif" }}>Opening…</div>;

  return (
    <div className="min-h-screen w-full bg-stone-50 text-stone-800" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
      <div className="max-w-2xl mx-auto px-6 py-10 min-h-screen flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <button onClick={reset} className="flex items-center gap-2 text-stone-500 hover:text-stone-800 transition-colors"><Feather size={18} /><span className="text-sm uppercase" style={{ letterSpacing: "0.2em" }}>Open Question</span>{isPlus && <PlusTag />}</button>
          <div className="flex items-center gap-3">
            <button onClick={() => setScreen("courses")} className="text-stone-400 hover:text-stone-700" title="Courses"><GraduationCap size={17} /></button>
            <button onClick={() => isPlus ? setScreen("journal") : gate()} className="text-stone-400 hover:text-stone-700" title="Journal"><NotebookPen size={17} /></button>
            {explored > 0 && <button onClick={() => setScreen("map")} className="text-xs text-stone-400 hover:text-stone-700 flex items-center gap-1"><Compass size={14} /> {explored}/{ARGUMENTS.length}</button>}
          </div>
        </div>

        {screen === "intro" && (
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-4xl leading-tight mb-6 text-stone-900">An honest exploration of the oldest question.</h1>
            <p className="text-lg leading-relaxed text-stone-600 mb-4">Does anything lie behind the universe — or is it all there is? Serious philosophers, scientists, and artists have stood on every side for millennia.</p>
            <p className="text-lg leading-relaxed text-stone-600 mb-8">Each question is laid out with its strongest case <em>for</em> and <em>against</em>. You decide where you lean. Nothing is scored. Nothing is hidden.</p>
            <div className="flex flex-wrap gap-3"><Btn onClick={() => { setCourse(null); setIdx(0); setScreen("argument"); }}>Begin <ChevronRight size={18} /></Btn><Btn variant="ghost" onClick={() => setScreen("courses")}><GraduationCap size={18} /> Guided courses</Btn></div>
          </div>
        )}

        {screen === "argument" && (
          <div className="flex-1 flex flex-col">
            <div className="text-xs uppercase tracking-widest text-stone-400 mb-3" style={{ letterSpacing: "0.2em" }}>{arg.isObjection ? "An objection worth facing" : "A question worth weighing"} · {idx + 1} of {ARGUMENTS.length}</div>
            <h2 className="text-3xl leading-snug text-stone-900 mb-1">{arg.title}</h2>
            <div className="text-sm italic text-stone-400 mb-5">{arg.short}</div>
            <ArgumentCard a={arg} />
            <div className="flex items-center justify-between mt-auto pt-2"><Btn variant="ghost" onClick={() => idx > 0 ? setIdx(idx - 1) : setScreen("intro")}><ChevronLeft size={18} /> Back</Btn>{idx < ARGUMENTS.length - 1 ? <Btn onClick={() => setIdx(idx + 1)}>Next <ChevronRight size={18} /></Btn> : <Btn onClick={() => setScreen("map")}>Where I stand <Compass size={18} /></Btn>}</div>
          </div>
        )}

        {screen === "courses" && (
          <div className="flex-1 flex flex-col">
            <GraduationCap size={26} className="text-stone-500 mb-3" />
            <h2 className="text-3xl text-stone-900 mb-2">Guided courses {!isPlus && <PlusTag />}</h2>
            <p className="text-stone-500 mb-7 leading-relaxed">Structured journeys through the questions, with framing and reflection at each step.</p>
            <div className="space-y-3 mb-7">
              {COURSES.map((c) => (
                <button key={c.id} onClick={() => isPlus ? (setCourse({ id: c.id, pos: -1 }), setScreen("course-run")) : gate()} className="w-full text-left rounded-xl border border-stone-200 bg-white p-5 hover:border-stone-400 transition-colors">
                  <div className="flex items-center justify-between"><div className="text-stone-900 mb-1">{c.title}</div>{!isPlus && <Lock size={14} className="text-stone-300" />}</div>
                  <p className="text-sm text-stone-500 leading-relaxed">{c.blurb}</p>
                  <div className="text-xs text-stone-400 mt-2" style={{ fontFamily: "system-ui" }}>{c.steps.length} steps</div>
                </button>
              ))}
            </div>
            <div className="mt-auto pt-2"><Btn variant="ghost" onClick={() => setScreen("intro")}><ChevronLeft size={18} /> Home</Btn></div>
          </div>
        )}

        {screen === "course-run" && course && (() => {
          const c = COURSES.find((x) => x.id === course.id);
          if (course.pos === -1) return (
            <div className="flex-1 flex flex-col justify-center">
              <div className="text-xs uppercase tracking-widest text-stone-400 mb-3" style={{ letterSpacing: "0.2em" }}>Course</div>
              <h2 className="text-3xl text-stone-900 mb-5">{c.title}</h2>
              <p className="text-lg leading-relaxed text-stone-600 mb-8">{c.intro}</p>
              <div className="flex gap-3"><Btn onClick={() => setCourse({ ...course, pos: 0 })}>Begin course <ChevronRight size={18} /></Btn><Btn variant="ghost" onClick={() => setScreen("courses")}>Back</Btn></div>
            </div>
          );
          if (course.pos >= c.steps.length) return (
            <div className="flex-1 flex flex-col justify-center">
              <Check size={26} className="text-emerald-500 mb-3" />
              <h2 className="text-3xl text-stone-900 mb-5">{c.title} — complete</h2>
              <p className="text-lg leading-relaxed text-stone-600 mb-8">{c.outro}</p>
              <div className="flex gap-3"><Btn onClick={() => setScreen("journal")}><NotebookPen size={18} /> See my journal</Btn><Btn variant="ghost" onClick={() => setScreen("courses")}>More courses</Btn></div>
            </div>
          );
          const ca = ARGUMENTS.find((x) => x.id === c.steps[course.pos]);
          return (
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-3"><div className="text-xs uppercase tracking-widest text-amber-700" style={{ letterSpacing: "0.15em" }}>{c.title}</div><div className="text-xs text-stone-400" style={{ fontFamily: "system-ui" }}>Step {course.pos + 1} / {c.steps.length}</div></div>
              <div className="h-1 rounded-full bg-stone-200 mb-5 overflow-hidden"><div className="h-full bg-amber-400 rounded-full transition-all" style={{ width: `${((course.pos + 1) / c.steps.length) * 100}%` }} /></div>
              <h2 className="text-3xl leading-snug text-stone-900 mb-1">{ca.title}</h2>
              <div className="text-sm italic text-stone-400 mb-5">{ca.short}</div>
              <ArgumentCard a={ca} />
              <div className="flex items-center justify-between mt-auto pt-2"><Btn variant="ghost" onClick={() => setCourse({ ...course, pos: course.pos - 1 })}><ChevronLeft size={18} /> Back</Btn><Btn onClick={() => setCourse({ ...course, pos: course.pos + 1 })}>{course.pos === c.steps.length - 1 ? "Finish" : "Next"} <ChevronRight size={18} /></Btn></div>
            </div>
          );
        })()}

        {screen === "journal" && (
          <div className="flex-1 flex flex-col">
            <NotebookPen size={26} className="text-stone-500 mb-3" />
            <h2 className="text-3xl text-stone-900 mb-2">Your journal</h2>
            <p className="text-stone-500 mb-7 leading-relaxed">How your thinking has moved over time. Saved on this device, private to you.</p>
            {history.length === 0 ? (<p className="text-stone-400 italic">No entries yet. Weigh a question and your leaning will appear here.</p>) : (
              <div className="space-y-5 mb-7">
                {ARGUMENTS.filter((a) => history.some((h) => h.id === a.id)).map((a) => {
                  const entries = history.filter((h) => h.id === a.id);
                  return (
                    <div key={a.id} className="rounded-xl border border-stone-200 bg-white p-4">
                      <div className="text-sm text-stone-800 mb-2">{a.short}</div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">{entries.map((e, i) => (<span key={i} className="flex items-center gap-2">{i > 0 && <ArrowRight size={12} className="text-stone-300" />}<span className="text-xs text-stone-600" style={{ fontFamily: "system-ui" }} title={new Date(e.t).toLocaleString()}>{LEAN_LABELS[e.v]}</span></span>))}</div>
                      <div className="text-[11px] text-stone-400 mt-2" style={{ fontFamily: "system-ui" }}>Last updated {new Date(entries[entries.length - 1].t).toLocaleDateString()}</div>
                    </div>
                  );
                })}
              </div>
            )}
            <div className="mt-auto pt-2"><Btn variant="ghost" onClick={() => setScreen("map")}><ChevronLeft size={18} /> My map</Btn></div>
          </div>
        )}

        {screen === "map" && (
          <div className="flex-1 flex flex-col">
            <h2 className="text-3xl text-stone-900 mb-2">Where you stand right now</h2>
            <p className="text-stone-500 mb-7 leading-relaxed">A mirror, not a verdict. Tap any question to revisit it.</p>
            <div className="space-y-4 mb-7">
              {ARGUMENTS.map((a) => { const v = leanings[a.id]; return (
                <button key={a.id} onClick={() => { setIdx(ARGUMENTS.indexOf(a)); setCourse(null); setScreen("argument"); }} className="w-full text-left group">
                  <div className="flex items-center justify-between mb-1"><span className="text-sm text-stone-700 group-hover:text-stone-900">{a.short}</span><span className="text-xs text-stone-400" style={{ fontFamily: "system-ui" }}>{v != null ? LEAN_LABELS[v] : "Not yet weighed"}</span></div>
                  <div className="h-2 rounded-full bg-stone-200 overflow-hidden"><div className="h-full bg-stone-700 rounded-full transition-all" style={{ width: v != null ? `${(v / 4) * 100}%` : "0%" }} /></div>
                </button>
              ); })}
            </div>
            {avg != null && (<div className="rounded-xl bg-stone-100 border border-stone-200 p-5 mb-6"><p className="text-stone-600 leading-relaxed text-sm">{avg >= 2.5 ? "You seem to be leaning toward openness or belief. If you ever want to explore what walking that path looks like in practice, there's a guide to the major Christian traditions." : "You seem to be leaning toward skepticism or remaining unconvinced. If the question of community and meaning without religion interests you, there's a guide to that too."}</p></div>)}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <button onClick={() => setScreen("belief")} className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-left hover:bg-amber-100 transition-colors"><Church size={18} className="text-amber-700 mb-2" /><div className="text-sm text-stone-800">If you're leaning toward belief</div><div className="text-xs text-stone-500" style={{ fontFamily: "system-ui" }}>Christian traditions & first steps</div></button>
              <button onClick={() => setScreen("secular")} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-left hover:bg-slate-100 transition-colors"><Users size={18} className="text-slate-600 mb-2" /><div className="text-sm text-stone-800">If you're leaning secular</div><div className="text-xs text-stone-500" style={{ fontFamily: "system-ui" }}>Community & meaning without religion</div></button>
            </div>
            <div className="mt-auto flex items-center justify-between pt-2"><Btn variant="ghost" onClick={() => { setLeanings({}); persist(SK.lean, {}); reset(); }}><RotateCcw size={15} /> Reset leanings</Btn><Btn onClick={() => setScreen("close")}>One last thought <ChevronRight size={18} /></Btn></div>
          </div>
        )}

        {screen === "close" && (
          <div className="flex-1 flex flex-col justify-center py-6">
            <Heart size={28} className="text-rose-300 mb-6" />
            <h2 className="text-3xl leading-snug text-stone-900 mb-6">Where the arguments leave us</h2>
            <div className="space-y-5 text-lg leading-relaxed text-stone-600">
              <p>If you've read honestly, you've noticed something: none of these arguments forces a conclusion. The case for belief does not compel, and neither does the case against. The evidence underdetermines the answer — which is why sincere, brilliant people land in different places.</p>
              <p>So perhaps the question is not only <em>what can be proven</em>, but <em>what is reasonable to live by</em> when proof runs out.</p>
              <p>Consider the things you could not quite call illusions. The <span className="text-stone-900">beauty</span> that stops you in a doorway and feels like more than rearranged atoms. The <span className="text-stone-900">peace</span> available to those who trust they are not finally alone. The stubborn <span className="text-stone-900">hope</span> that the story bends toward something — so persistent it can seem less like wishful thinking than like a faculty for sensing what is true.</p>
              <p>And the conviction you were surest of: that some things are <span className="text-stone-900">truly evil</span> — wrong in a way that would still be wrong if everyone forgot it. If you cannot surrender that conviction, ask what kind of universe makes it true. A world with real evil is a world where the word <em>real</em> applies to good — and a world with real goodness woven through it is not obviously a world of indifferent matter.</p>
              <p className="text-stone-900">This is an invitation, not a verdict. Beauty, peace, hope, and the reality of evil are not proofs — but they are clues, and they seem to lean the same way. You are free to walk through, or to stand in the doorway a while longer. Either way, the question stays open, and worth keeping.</p>
            </div>
            <div className="flex items-center gap-4 mt-10"><Btn variant="ghost" onClick={() => setScreen("map")}><ChevronLeft size={18} /> My map</Btn><Btn variant="ghost" onClick={reset}><RotateCcw size={15} /> Begin again</Btn></div>
          </div>
        )}

        {screen === "belief" && (
          <div className="flex-1 flex flex-col">
            <Church size={26} className="text-amber-600 mb-4" />
            <h2 className="text-3xl text-stone-900 mb-2">If you want to explore the path</h2>
            <p className="text-stone-500 mb-5 leading-relaxed">No pressure, no commitment. An overview of Christianity's major traditions. {!isPlus && "The full step-by-step companion for each is part of Plus."}</p>
            <div className="space-y-3 mb-7">
              {[["Roman Catholicism", "Sacramental worship and a deep philosophical heritage (Aquinas); appeals to many former skeptics."], ["Eastern Orthodoxy", "Ancient, mystical, sensory worship; mystery over system."], ["Anglican / Episcopal", "A 'middle way' comfortable with reason and honest doubt."], ["Reformed / Presbyterian", "Among the most philosophically rigorous Protestant traditions (home to Plantinga)."], ["Baptist / Evangelical", "Personal faith, scripture-focused, accessible to newcomers."]].map(([n, d]) => (
                <div key={n} className="rounded-xl border border-stone-200 bg-white p-4"><div className="flex items-center justify-between"><div className="text-stone-900 mb-1">{n}</div></div><p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                  {isPlus ? <p className="text-sm text-stone-600 bg-amber-50 rounded-lg p-3 border border-amber-100 mt-2" style={{ fontFamily: "system-ui" }}><span className="font-semibold">First steps:</span> Look up a local congregation, attend a service (you're committed to nothing by visiting), and ask about their inquirers' or newcomers' class.</p> : <button onClick={gate} className="mt-2 text-xs flex items-center gap-1.5 text-stone-400 hover:text-amber-700" style={{ fontFamily: "system-ui" }}><Lock size={12} /> Practical first steps <PlusTag /></button>}
                </div>
              ))}
            </div>
            <div className="text-xs text-stone-400 italic mb-6">Described neutrally; not an endorsement of any one tradition over the others, or over none.</div>
            <div className="mt-auto flex items-center justify-between pt-2"><Btn variant="ghost" onClick={() => setScreen("map")}><ChevronLeft size={18} /> Back</Btn><Btn onClick={() => setScreen("close")}>One last thought <ChevronRight size={18} /></Btn></div>
          </div>
        )}

        {screen === "secular" && (
          <div className="flex-1 flex flex-col">
            <Users size={26} className="text-slate-600 mb-4" />
            <h2 className="text-3xl text-stone-900 mb-2">Community & meaning without religion</h2>
            <p className="text-stone-500 mb-5 leading-relaxed">If belief isn't for you, the belonging and ritual religion offered need not be lost. {!isPlus && "The full how-to guide is part of Plus."}</p>
            <div className="space-y-3 mb-7">
              {[["Sunday Assembly", "A secular congregation — songs, talks, community, no theology."], ["Humanist organizations", "Community, ethics, and life ceremonies (weddings, funerals)."], ["Ethical Culture societies", "Organized around ethics and service: 'deed before creed.'"], ["Unitarian Universalism", "A religious community that requires no belief in God."], ["Philosophy cafés & meetups", "Intellectual fellowship without doctrine."]].map(([n, d]) => (
                <div key={n} className="rounded-xl border border-stone-200 bg-white p-4"><div className="text-stone-900 mb-1">{n}</div><p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                  {isPlus ? <p className="text-sm text-stone-600 bg-slate-50 rounded-lg p-3 border border-slate-100 mt-2" style={{ fontFamily: "system-ui" }}><span className="font-semibold">First steps:</span> Search for a local chapter or meetup; commit to showing up regularly; volunteer for a small role — being needed builds belonging faster than anything.</p> : <button onClick={gate} className="mt-2 text-xs flex items-center gap-1.5 text-stone-400 hover:text-amber-700" style={{ fontFamily: "system-ui" }}><Lock size={12} /> Practical first steps <PlusTag /></button>}
                </div>
              ))}
            </div>
            <div className="mt-auto flex items-center justify-between pt-2"><Btn variant="ghost" onClick={() => setScreen("map")}><ChevronLeft size={18} /> Back</Btn><Btn onClick={() => setScreen("close")}>One last thought <ChevronRight size={18} /></Btn></div>
          </div>
        )}

        {showPaywall && (
          <div className="fixed inset-0 bg-stone-900/40 flex items-center justify-center p-6 z-50" onClick={() => setShowPaywall(false)}>
            <div className="bg-stone-50 rounded-2xl max-w-md w-full p-7 shadow-xl" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center gap-2 mb-3"><Star size={20} className="text-amber-500" /><h3 className="text-xl text-stone-900">Open Question Plus</h3></div>
              <p className="text-stone-600 leading-relaxed mb-4 text-sm">The core exploration is always free. Plus unlocks the deeper layer for those who want to go further:</p>
              <ul className="space-y-2 mb-5">{["The expert 'Go Deeper' layer on every argument", "Full peer-reviewed source libraries", "Your saved journal — track how your views evolve", "Guided multi-step courses", "Practical path guides, in either direction"].map((t) => (<li key={t} className="flex items-start gap-2 text-sm text-stone-700"><Check size={15} className="text-amber-600 mt-0.5 shrink-0" />{t}</li>))}</ul>
              <div className="text-xs text-stone-400 mb-4" style={{ fontFamily: "system-ui" }}>Demo: this button simulates a purchase so you can preview the Plus tier. In production it would open checkout (≈ $4.99/mo or $39 once).</div>
              <div className="flex gap-3"><button onClick={unlock} className="flex-1 bg-stone-800 text-stone-50 px-5 py-2.5 rounded-full hover:bg-stone-700 transition-colors" style={{ fontFamily: "system-ui" }}>Unlock Plus (demo)</button><button onClick={() => setShowPaywall(false)} className="px-5 py-2.5 text-stone-500 hover:text-stone-800" style={{ fontFamily: "system-ui" }}>Not now</button></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
