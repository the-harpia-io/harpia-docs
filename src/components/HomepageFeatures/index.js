import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Detect',
    Svg: require('@site/static/img/detect.svg').default,
    description: (
      <>
          Receive an alert from the monitoring system
      </>
    ),
  },
  {
    title: 'Investigate',
    Svg: require('@site/static/img/investigate.svg').default,
    description: (
      <>
          Enrich and verify the severity of the problem
      </>
    ),
  },
  {
    title: 'Resolve',
    Svg: require('@site/static/img/resolve.svg').default,
    description: (
      <>
          Inform or run automation flow to fix the problem
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
