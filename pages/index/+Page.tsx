import React from 'react';
import clsx from "clsx";
import Link from "../../components/Link";

export { Page }

function Page() {
  const blurbParagraphs: React.ReactNode[] = [
    "Hannah Kofman is a writer from Los Angeles pursuing an MFA in fiction at Washington University in St. Louis.",
    "In the past she's worked on a farm, in a restaurant, and as a tutor. Her reviews and essays have appeared in the Los Angeles Review of Books, MUBI notebook, and Michigan Quarterly Review. Her fiction explores bodies in pain and what we hide from ourselves.",
    <>She is currently an intern at <Link href="https://dorothyproject.com" className="italic">Dorothy, a publishing project</Link>, an award-winning experimental feminist press.</>,
    "You can reach her via email at kofman.hannah@gmail.com."
  ];

  return (
    <>
      <Link href="/"><h1 className="text-3xl mb-4 font-[Pacifico]">Hannah Kofman</h1></Link>

      <img
        src="profile.webp"
        className="w-full max-w-fit ms-auto me-auto mb-4 !col-span-full shadow-md"
        alt="A photo of Hannah Kofman standing on a busy street in Athens. The background is blurred, Hannah is smiling. She's wearing a vintage beige leather jacket, sunglasses and has her hair in a ponytail."
      />

      {blurbParagraphs.map((paragraph, index) => (
        <p key={`blurb-paragraph-${index.toString()}`} className={clsx({ 'mt-2': index !== 0 })}>
          {paragraph}
        </p>
      ))}

      <h2 className="mt-8 font-[Pacifico] text-lg">Writing</h2>

      <ul className="mt-4">
        <li className="mb-4">&quot;<Link href="https://lareviewofbooks.org/article/borderless-text-on-helen-oyeyemis-parasol-against-the-axe/">Borderless Text: On Helen Oyeyemi&apos;s <span className="italic">Parasol Against the Axe</span></Link>,&quot; Los Angeles Review of Books, 2024</li>
        <li className="mb-4">&quot;<Link href="https://lareviewofbooks.org/article/the-divorce-of-womens-hands-on-johanne-lykke-holms-strega/">The Divorce of Women&apos;s Hands: On Johanne Lykke Holm&apos;s <span className="italic">Strega</span></Link>,&quot; Los Angeles Review of Books, 2022</li>
        <li className="mb-4">&quot;<Link href="https://mubi.com/en/notebook/posts/cinema-embodied-the-spell-of-syros">Cinema Embodied: The Spell of Syros</Link>,&quot; An essay on working and watching movies at a Greek film festival, MUBI Notebook, 2022</li>
        <li className="mb-4">&quot;<Link href="https://webservices-dev.lsa.umich.edu/multisite/mqr/author/hannah-kofman/">Mirrors and Portals: Sam Cohen&apos;s <span className="italic">Sarahland</span></Link>,&quot; A review of Sam Cohen&apos;s <span className="italic">Sarahland</span>, Michigan Quarterly Review, 2021</li>
        <li className="mb-4">&quot;<Link href="https://lareviewofbooks.org/article/toeing-the-trap/">Toeing the Trap</Link>,&quot; A review of Tove Ditlevsen&apos;s <span className="italic">The Copenhagen Trilogy</span>, Los Angeles Review of Books, 2021</li>
      </ul>
    </>
  )
}
