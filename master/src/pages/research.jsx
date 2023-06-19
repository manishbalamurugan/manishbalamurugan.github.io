import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ContentSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      {
        cta ? (
          <Card.Cta>{cta}</Card.Cta>
        ) : null
      }
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Research - Manish Balamurugan</title>
        <meta
          name="description"
          content="Manish Balamurugan - AI & Tech Innovation Research"
        />
      </Head>
      <SimpleLayout
        title="Here's some of the projects which I fully explored and delved into"
        intro="I've designed, implemented, and published various research concepts in the AI/ML space and their intersections in verticals including Healthtech and Business. I'm passionate about ethical AI, precision technology, and quantitative finance."
      >
        <div className="space-y-20">
          <ContentSection title="Publications">
            <Appearance
              href="https://www.spiedigitallibrary.org/conference-proceedings-of-spie/11602/116021C/Automatic-detection-of-cotton-balls-during-brain-surgery--where/10.1117/12.2580887.short?SSO=1"
              title="Automatic detection of cotton balls during brain surgery: where deep learning meets ultrasound imaging to tackle foreign objects"
              description="Cotton balls are a versatile and efficient tool commonly used in neurosurgical procedures to absorb fluids and manipulate delicate tissues. However, the use of cotton balls is accompanied by the risk of accidental retention in the brain after surgery. Retained cotton balls can lead to dangerous immune responses and potential complications, such as adhesions and textilomas. In a previous study, we showed that ultrasound can be safely used to detect cotton balls in the operating area due to the distinct acoustic properties of cotton compared with the acoustic properties of surrounding tissue. In this study, we enhance the experimental setup using a 3D-printed custom depth box and a Butterfly IQ handheld ultrasound probe. Cotton balls were placed in variety of positions to evaluate size and depth detectability limits. Recorded images were then analyzed using a novel algorithm that implements recently released..."
              event="Medical Imaging 2021: Ultrasonic Imaging and Tomography 11602, 295-302"
              cta="View Publication"
            />
            <Appearance
              href="https://watermark.silverchair.com/v001t02a001-dmd2020-9109.pdf?token=AQECAHi208BE49Ooan9kkhW_Ercy7Dm3ZL_9Cf3qfKAc485ysgAABAYwggQCBgkqhkiG9w0BBwagggPzMIID7wIBADCCA-gGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMd4MhkWH7G7Ur-sZkAgEQgIIDuUiFVijZGUVGr275Vs53h-0P9yrqrDPdBe8kmMMkzInCmx88NkvFX5nU1kH1A5vU2xo9TQIIquYcUoKk_q7KF0HHVqpr3Xmp93yuC__0GFjG2mHRI8d1VFJKbPDsi505hTCO5DBKL52cRNKxRjEsqLeLUZV2Hy7Wy_XgDX5OU4E3d4e8KN-M005PjUDdQaEueFWU2hxinGMESN8mm5smTD64pXHtE-jquCGoRL-TCX7V0c0cP9EapwnJ__lg_XYTr6CRL1JzB2BsMDR1PLhnsAvWEJgFJbvHzI3lcps1hc1Cf1fbKx9LROWgw62uP49wYVruXyNA2IQZlOMFw_HkOwLMd6c_znzU5qptW4RD2eu038nGI8s6cABG1qFDPmO5PZd6wmAgGFCwG9S2g_VbJ2ZAvxhBffU0p2b5Y7Pf1ItieGlXblTfu65o1Z7pGonLPdWyVM_ONXheEUTehhO5fqYX6XYA4OBSqb6RnPeZ_YcpR8WwAH1jbfnCJr7rKPWdTD-NFpjcPhR9DeyhCRaaATI2_7fv4OC9yke6frdPb6UbLp0hepAXI3nWYUKU7WbL2TkHbKFbPViMO05ObZnWOp6PeVrjXfKQcjfsgasbz0-LI3mLcDXD2hnLg1bhHNlYj_mniOegmbd9XllnibA-w7wSzHNp-C600miJJr6qIPoELm97o9gitVOR43OUkchfl3xXXnHShEF-QEHXpcmcZvg5clEjhal1DQOif7kSw5WsOX2fKQt1UYFhCvf4-vCunHuig4tZAIq1aiiPNnwE60wfMcDfrwY-zrhsLajgIcPvMvw7Vm4qeHWApRDyuRGGvzIix1_0rok7wohW9OUb60tq4bbKh6bPvhKtaeZ6Bwi8zrseobar2b0UeXCX1c1-IeKWFsvC37xX8dJEohF6_rdDHumGIPhEbLjgHz_hcQ_1iTIzVt69pxEDN36oIfyFiUgFkusgj-_KG0Qby3CLRL0kSBnGK1qR5zEGYc0S6VykGHo90CrOvMiY2tsHJlo6ZQVSQpw96q7TsBbAiypFNDzDfBbsqrO9bIX0JK9kpnMomadKbyb2oVLgM3mCs2ruVSiS80BXp24Oj63RtWC30qsHc45o2XJz57DbzcImslXOQxD4CjyODaIYFpT9DWOsCTaRnMd9DA2MYtcVQEZ6oTj_0a4V7qS3PY_3RSOVNtA90PJCTNMnZGQF67yi0eqJM82yO4djdOVptFfgFO6oDKcaysJFp-bAGArqr6j1Ql0wf0BshlnsI5Yk"
              title="USDL: Inexpensive medical imaging using deep learning techniques and ultrasound technology"
              description="In this study, we present USDL, a novel model that employs deep learning algorithms in order to reconstruct and enhance corrupted ultrasound images. We utilize an unsupervised neural network called an autoencoder which works by compressing its input into a latent-space representation and then reconstructing the output from this representation. We trained our model on a dataset that compromises of 15,700 in vivo images of the neck, wrist, elbow, and knee vasculature and compared the quality of the images generated using the structural similarity index (SSIM) and peak to noise ratio (PSNR). In closely simulated conditions, the architecture exhibited an average reconstruction accuracy of 90% as indicated by our SSIM. Our study demonstrates that USDL outperforms state of the art image enhancement and reconstruction techniques in both image quality and computational complexity, while maintaining..."
              event="American Society of Mechanical Engineers"
              cta="View Publication"
            />
          </ContentSection>
          <ContentSection title="Projects & Discussion">
            <Appearance
              href="/ml4va.pdf"
              title="ML4VA: A Machine Learning-based Approach for Diabete Detection"
              description="In this paper, we compared the performance of various machine learning models including Logistic Regression, Random Forest, and Convolutional Neural Networks (CNN), in order to create a prediciton tool that is able to function as a diabetic predictor. Virginia’s diabetes rate is on par with the national average and growing quickly. In recent years, we’ve also seen a rise in the proportion of the population that can be classified as prediabetic. However, Type 2 diabetes is preventable with lifestyle changes and proper treatment. For this project we have decided to tackle the challenge of determining whether an individual is at risk of diabetes in order to ensure that they can undergo the proper screening, treatment, and life style changes in order to properly control this disease before serious com- plications arise. In this project we employ various classification models and experiment with optimizers and error functions to achieve the highest precision model. We believe that identifying an individuals likelihood for contracting di- abetes may encourage Virginians to consider lifestyle changes and reduce our state’s diabetic rate in the future."
              event="UVA CS 4744 Machine Learning"
              cta="View Paper"
            />
            <Appearance
              href="/ai-hallucination.pdf"
              title="ChatGPT, Generative AI, & AI Hallucinations"
              description="Artificial Intelligence (AI) has been a hot topic of discussion since the turn of the last century, and within the last decade there has been rapid advances within the space including general public access to state of the art models. Within the last year, the generative AI space - a subset of AI systems which can be utilized to generate content including images, audio, code, and simulations - has been rapidly adopted throughout various sectors including healthcare, finance, transportation, and retail.[2] The surge in open-source access of big data and computing resources can be linked to the wider accessibility of open source resources for AI model development. Integrated systems such as GPT have shown the capability of being utilized in larger systems and business use-cases, and the performance of this technology continues to advance rapidly everyday through the efforts of large corporations such as OpenAI and Microsoft along with the efforts of independent researchers and AI/ML enthusiasts. Currently, AI systems such as GPT, LLAMA, HuggingFace-GPT, have reached a stage where the capabilities of these systems are not only capable of performing simple tasks but is also fully stable in higher-level task requiring object recognition, natural language processing, and decision-making with the ability to generate human-like responses..."
              event="UVA PHIL 1410 Forms of Reasoning"
              cta="View Paper"
            />
          </ContentSection>
        </div>
      </SimpleLayout>
    </>
  )
}
