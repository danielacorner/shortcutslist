import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TopTip from "../components/TopTip"
import ShortcutsSection from "../components/PageComponents/ShortcutsSection/ShortcutsSection"
import PageStyles from "../components/PageComponents/PageStyles"

export default ({ pageContext }) => {
  return (
    <Layout>
      <SEO title="Windows" />
      <TopTip />
      <PageStyles>
        <section>
          <h1 className="title">{pageContext.title}</h1>
          {Object.entries(pageContext.shortcuts).map(
            ([sectionTitle, shortcuts]) => (
              <ShortcutsSection
                key={sectionTitle}
                shortcuts={shortcuts}
                sectionTitle={sectionTitle}
              />
            )
          )}
        </section>
      </PageStyles>
    </Layout>
  )
}
