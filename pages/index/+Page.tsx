import React from "react";
import Link from "../../components/Link";

export { Page }

function Page() {
  const blurbParagraphs: React.ReactNode[] = [
    "Hannah Kofman has an MFA from Washington University in St. Louis. Her work has appeared in the Los Angeles Review of Books, MUBI notebook, and Michigan Quarterly Review.",
    <>Her story won the Carrie Scott Galt Writer&apos;s award and she was a semi-finalist for the Fine Arts Work Fellowship in 2025. Other accolades include being shortlisted for the Disquiet Literary Prize 2024 and longlisted for the 2024 Ploughshares Emerging Writer&apos;s Contest. In 2021, she was longlisted for A Public Space Fellowship. At Barnard College, she won the Anna Quindlen/Axinn Foundation Award, a $25,000 prize granted to a graduating senior. She has received support from the Sewanee Writers&apos; Conference, Disquiet International Conference, Tin House Novel Workshop, and NY State Summer Writing Institute.</>,
    <>Most recently she interned at <Link href="https://dorothyproject.com">Dorothy, a publishing project</Link>, an award-winning experimental feminist press. She&apos;s also interned at The Los Angeles Review of Books and O, Oprah Magazine in the books department.</>,
    <>In the past she&apos;s worked on a farm, in a restaurant, and as a tutor. Her fiction is interested in the narcissism of suffering and the intricacies of family relationships. She&apos;s currently working on a novel and a short story collection.</>,
    <>You can reach her via email at kofman.hannah@gmail.com</>
  ];

  const writings = [
    { title: "Borderless Text: On Helen Oyeyemi's Parasol Against the Axe", publication: "Los Angeles Review of Books", year: "2024", url: "https://lareviewofbooks.org/article/borderless-text-on-helen-oyeyemis-parasol-against-the-axe/" },
    { title: "The Divorce of Women's Hands: On Johanne Lykke Holm's Strega", publication: "Los Angeles Review of Books", year: "2022", url: "https://lareviewofbooks.org/article/the-divorce-of-womens-hands-on-johanne-lykke-holms-strega/" },
    { title: "Cinema Embodied: The Spell of Syros", publication: "MUBI Notebook", year: "2022", url: "https://mubi.com/en/notebook/posts/cinema-embodied-the-spell-of-syros" },
    { title: "Mirrors and Portals: Sam Cohen's Sarahland", publication: "Michigan Quarterly Review", year: "2021", url: "https://webservices-dev.lsa.umich.edu/multisite/mqr/author/hannah-kofman/" },
    { title: "Toeing the Trap: On Tove Ditlevsen's The Copenhagen Trilogy", publication: "Los Angeles Review of Books", year: "2021", url: "https://lareviewofbooks.org/article/toeing-the-trap/" },
  ];

  return (
    <div className="min-h-screen overflow-x-clip">
      <div className="relative mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14">
        <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-periwinkle/45 blur-3xl" />

        <main className="relative z-10 space-y-12">
          <section className="space-y-8">
            <div className="space-y-6">
              <Link href="/" className="block no-underline">
                <h1 className="font-script text-2xl leading-[1.1] text-ink md:text-4xl">Hannah Kofman</h1>
              </Link>

              <div className="w-full max-w-2xl">
                <div className="relative">
                  <div className="absolute -bottom-3 -right-3 h-full w-full rounded-[2rem] border-2 border-dashed border-petal/55 bg-lilac" />
                  <img
                    src="profile.webp"
                    className="relative w-full rounded-[1.7rem] border border-ink/20 object-cover"
                    alt="A photo of Hannah Kofman standing on a busy street in Athens. The background is blurred, Hannah is smiling. She's wearing a vintage beige leather jacket, sunglasses and has her hair in a ponytail."
                  />
                </div>
              </div>

              <div className="max-w-3xl rounded-3xl border border-ink/12 bg-cream p-6 md:p-8">
                <div className="space-y-4 text-[1.02rem] leading-relaxed text-ink/85">
                  {blurbParagraphs.map((paragraph, index) => (
                    <p key={`blurb-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

          </section>

          <section className="rounded-3xl border border-ink/12 bg-cream p-6 md:p-8">
            <div className="mb-6">
              <h2 className="font-script text-lg text-ink md:text-2xl">Selected Writing</h2>
            </div>

            <ul className="space-y-1">
              {writings.map((writing, index) => (
                <li key={`writing-${index}`}>
                  <Link href={writing.url} className="group block rounded-xl p-4 no-underline !transition-none hover:bg-white">
                    <p className="text-xs uppercase tracking-[0.16em] text-ink/60">
                      {writing.publication} · {writing.year}
                    </p>
                    <h3 className="mt-2 text-lg leading-snug text-ink group-hover:text-petal md:text-xl">
                      {writing.title}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

        </main>
      </div>
    </div>
  )
}
