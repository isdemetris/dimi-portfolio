import React, { useState } from 'react';

export default function Portfolio() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const Section = ({ id, title, subtitle, children, isOpen }) => (
    <div
      style={{
        marginBottom: '3rem',
        borderLeft: '2px solid rgba(0, 0, 0, 0.1)',
        paddingLeft: '1.75rem',
      }}
    >
      <button
        onClick={() => toggleSection(id)}
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          textAlign: 'left',
          width: '100%',
        }}
      >
        <h2
          style={{
            fontSize: '20px',
            fontWeight: 500,
            margin: '0 0 0.25rem 0',
            color: '#1a1a1a',
            letterSpacing: '-0.01em',
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            style={{
              fontSize: '14px',
              color: '#666',
              margin: 0,
              fontWeight: 400,
            }}
          >
            {subtitle}
          </p>
        )}
      </button>
      {isOpen && (
        <div
          style={{
            marginTop: '1.25rem',
            fontSize: '15px',
            lineHeight: '1.7',
            color: '#333',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );

  const CaseStudyCard = ({ title, insight, role }) => (
    <div
      style={{
        background: '#fafafa',
        border: '1px solid #e5e5e5',
        borderRadius: '8px',
        padding: '1.5rem',
        marginBottom: '1rem',
      }}
    >
      <h3
        style={{
          fontSize: '16px',
          fontWeight: 500,
          margin: '0 0 0.75rem 0',
          color: '#1a1a1a',
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: '14px',
          color: '#555',
          margin: '0 0 1rem 0',
          fontStyle: 'italic',
          lineHeight: '1.6',
        }}
      >
        "{insight}"
      </p>
      <p
        style={{
          fontSize: '14px',
          color: '#777',
          margin: 0,
          lineHeight: '1.6',
        }}
      >
        {role}
      </p>
    </div>
  );

  const MetricCard = ({ label, value }) => (
    <div
      style={{
        background: '#fafafa',
        border: '1px solid #e5e5e5',
        borderRadius: '8px',
        padding: '1.25rem',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          fontSize: '12px',
          color: '#999',
          margin: '0 0 0.5rem 0',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontSize: '22px',
          fontWeight: 500,
          margin: 0,
          color: '#1a1a1a',
        }}
      >
        {value}
      </p>
    </div>
  );

  return (
    <div
      style={{
        background: '#fff',
        minHeight: '100vh',
        padding: '3rem 1.5rem',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '720px',
          margin: '0 auto',
        }}
      >
        {/* INTRO */}
        <div
          style={{
            marginBottom: '4rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid #e5e5e5',
          }}
        >
          <h1
            style={{
              fontSize: '32px',
              fontWeight: 500,
              margin: '0 0 0.75rem 0',
              color: '#1a1a1a',
              letterSpacing: '-0.02em',
            }}
          >
            Dimi
          </h1>
          <p
            style={{
              fontSize: '16px',
              color: '#555',
              margin: '0 0 1rem 0',
              lineHeight: '1.7',
              fontWeight: 400,
            }}
          >
            Strategic creative operations leader. I architect how organizations create and deploy video at scale — designing systems, processes, and tools that enable teams of any skill level to contribute at quality.
          </p>
          <p
            style={{
              fontSize: '14px',
              color: '#777',
              margin: 0,
              lineHeight: '1.7',
            }}
          >
            Currently: Head of Video at Remote (2000-person organization). Previously: d:code:it, Reality Gaming.
          </p>
        </div>

        {/* CASE STUDIES */}
        <Section
          id="campaigns"
          title="Two campaigns"
          subtitle="Strategic thinking in practice"
          isOpen={expandedSection === 'campaigns'}
        >
          <CaseStudyCard
            title="Big things start like this"
            insight="Everyone celebrates the billion-dollar valuation. Nobody talks about the Tuesday morning when the founder couldn't make payroll."
            role="Full production: concept through final delivery. Collaborated with brand director to translate positioning across product range (day-one startup to 1000-person scale) into a visceral creative system. Worked deep into strategic brief to protect the video outcome."
          />

          <CaseStudyCard
            title="Work on what really matters"
            insight="We too often focus on the how (automate, get leaner, go faster). Yet no one's talking about the what — what will you actually do with all that time our tools will free up?"
            role="Producer and strategic lead. Identified the positioning gap in Remote's messaging, designed a scalable video template system with clear flexibility guardrails (custom VO here, common VO there), built production pipeline and documentation to execute at volume across multiple products."
          />

          <p
            style={{
              fontSize: '14px',
              color: '#777',
              marginTop: '1.75rem',
              fontStyle: 'italic',
            }}
          >
            Both campaigns show the same pattern: strategic insight → system design → production excellence.
          </p>
        </Section>

        {/* BUILDING AT REMOTE */}
        <Section
          id="remote"
          title="Building at Remote"
          subtitle="Scaling creative from 0 to 2000 people"
          isOpen={expandedSection === 'remote'}
        >
          <div style={{ marginBottom: '2rem' }}>
            <h3
              style={{
                fontSize: '13px',
                fontWeight: 600,
                margin: '0 0 0.75rem 0',
                color: '#1a1a1a',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              What I inherited
            </h3>
            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.7',
                margin: 0,
                color: '#555',
              }}
            >
              Video scattered across brand design. No process, no pre-production thinking, no structure. Early days.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3
              style={{
                fontSize: '13px',
                fontWeight: 600,
                margin: '0 0 0.75rem 0',
                color: '#1a1a1a',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              The design system
            </h3>
            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.7',
                margin: '0 0 0.75rem 0',
                color: '#555',
              }}
            >
              Respects the brand design system but focuses on how that translates to motion. Includes motion templates (logos, CTAs, typography), custom easing libraries, reusable compositions — practical guidance that lets motion designers move fast while staying on-brand.
            </p>
            <p
              style={{
                fontSize: '14px',
                color: '#999',
                margin: 0,
                fontStyle: 'italic',
              }}
            >
              The system is tiered: self-serve templates for anyone, deep guidelines for specialists.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3
              style={{
                fontSize: '13px',
                fontWeight: 600,
                margin: '0 0 0.75rem 0',
                color: '#1a1a1a',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Process &amp; collaboration
            </h3>
            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.7',
                margin: 0,
                color: '#555',
              }}
            >
              Built templates and frameworks for how projects get created. Documentation of workflow. Cross-functional collaboration patterns that actually work at scale.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3
              style={{
                fontSize: '13px',
                fontWeight: 600,
                margin: '0 0 0.75rem 0',
                color: '#1a1a1a',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              AI as augmentation
            </h3>
            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.7',
                margin: '0 0 0.75rem 0',
                color: '#555',
              }}
            >
              Script writing agent that helps people with no writing/video experience participate in the process. Better visualization of outcomes before production even starts.
            </p>
            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.7',
                margin: '0 0 0.75rem 0',
                color: '#555',
              }}
            >
              Performance evaluation tool: built an agent using Google's own ABCD evaluation criteria to proactively judge videos against performance standards. Producers get structured feedback before shipping, not after.
            </p>
            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.7',
                margin: 0,
                color: '#555',
              }}
            >
              Custom plugins and tools built with AI to amplify team capability across the organization.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3
              style={{
                fontSize: '13px',
                fontWeight: 600,
                margin: '0 0 0.75rem 0',
                color: '#1a1a1a',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Team &amp; output
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '12px',
                marginBottom: '1rem',
              }}
            >
              <MetricCard label="Video producers" value="4" />
              <MetricCard label="Specializations" value="4" />
              <MetricCard label="Year-on-year" value="↑↑" />
            </div>
            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.7',
                margin: 0,
                color: '#555',
              }}
            >
              Built a specialized team: 2 motion designers, 1 editor, 1 systems/tech focused producer. Each specialized. Output increased every year. Quality went up. What was impossible before is now routine.
            </p>
          </div>

          <div
            style={{
              background: '#fafafa',
              border: '1px solid #e5e5e5',
              borderRadius: '8px',
              padding: '1.5rem',
              marginTop: '2rem',
            }}
          >
            <p
              style={{
                fontSize: '13px',
                color: '#999',
                margin: '0 0 0.75rem 0',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              What's now possible
            </p>
            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.7',
                margin: 0,
                color: '#555',
              }}
            >
              A 2000-person organization that knows how to create good video. Standardized processes that don't stifle creativity. Teams that understand not just execution but strategy. A small, high-performing video function that punches far above its size.
            </p>
          </div>
        </Section>

        {/* PHILOSOPHY */}
        <Section
          id="philosophy"
          title="How I think"
          subtitle="What matters in creative operations"
          isOpen={expandedSection === 'philosophy'}
        >
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}
          >
            {[
              "Systems serve strategy. Build once, scale forever.",
              "Democratize without lowering the floor. Templates enable, they don't constrain.",
              "Technology augments humans, never replaces them.",
              "Clear processes reduce friction and protect quality.",
              "Write well before you shoot. Strategy crystallizes in the script.",
              "Trust the right people in the right positions — outcomes follow.",
              "Document everything. Institutional knowledge shouldn't live in one person's head.",
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  fontSize: '15px',
                  lineHeight: '1.7',
                  marginBottom: '1.25rem',
                  paddingLeft: '1.5rem',
                  position: 'relative',
                  color: '#555',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    color: '#ccc',
                  }}
                >
                  •
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* CREDIBILITY */}
        <Section
          id="credibility"
          title="Background"
          subtitle="Where I come from"
          isOpen={expandedSection === 'credibility'}
        >
          <div style={{ marginBottom: '2rem' }}>
            <h3
              style={{
                fontSize: '15px',
                fontWeight: 500,
                margin: '0 0 0.5rem 0',
                color: '#1a1a1a',
              }}
            >
              d:code:it, London (5+ years)
            </h3>
            <p
              style={{
                fontSize: '14px',
                color: '#777',
                margin: 0,
                lineHeight: '1.7',
              }}
            >
              In-house production lead for fintech. Built a video team managing internal and external contractors. Worked with JP Morgan, Bank of America, other heavily regulated clients where precision and compliance aren't negotiable. Learned that strong process protects both quality and sanity.
            </p>
          </div>

          <div>
            <h3
              style={{
                fontSize: '15px',
                fontWeight: 500,
                margin: '0 0 0.5rem 0',
                color: '#1a1a1a',
              }}
            >
              Reality Gaming (spinoff)
            </h3>
            <p
              style={{
                fontSize: '14px',
                color: '#777',
                margin: 0,
                lineHeight: '1.7',
              }}
            >
              Building something from scratch teaches you what actually matters. No inherited systems, no excuses.
            </p>
          </div>
        </Section>

        {/* FOOTER */}
        <div
          style={{
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid #e5e5e5',
          }}
        >
          <p
            style={{
              fontSize: '14px',
              color: '#777',
              margin: '0 0 0.5rem 0',
              lineHeight: '1.7',
            }}
          >
            Looking for Head of Video/Content/Strategy or Creative Operations roles where strategy, systems thinking, and team leadership matter.
          </p>
          <p
            style={{
              fontSize: '14px',
              color: '#777',
              margin: 0,
              lineHeight: '1.7',
            }}
          >
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/thisisdimi/"
              style={{
                color: '#1a1a1a',
                textDecoration: 'underline',
              }}
            >
              thisisdimi
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
