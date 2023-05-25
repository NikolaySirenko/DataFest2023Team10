import { parse } from 'date-fns'
import { useState } from 'react'
import styles from './styles/Info.module.css'

export function Info({ features }) {
    const speciesNames = features.map((feature) => feature.parameter).filter((feature) => !!feature);
    const species = [...new Set(speciesNames)]

    const [topic, setTopic] = useState(species[0]);

    if (!Array.isArray(features)) return undefined;

    // Trim dates
    features = features.map((feature) => {
        if (typeof feature.collectiondate === 'string') {
            feature.collectiondate = feature.collectiondate.trim()
            feature.collectiondate = parse(feature.collectiondate, 'dd-MM-yyyy HH:mm', new Date())
        }

        return feature
    })

    // Collect records
    const records = features.map((feature) => {
        return {
            name: feature.parameter,
            value: feature.calculatedvalue,
            units: feature.calculatedunit,
            date: feature.collectiondate
        }
    })

    return <>

        <div className={styles.topics}>
            {
                species.map((value) => {
                    return <>
                        <div
                            key={value}
                            className={styles.topic}
                        >
                            {value}
                        </div>

                        <pre>
                            {JSON.stringify(records.filter((record) => record.name === value), null, '\t')}
                        </pre>
                    </>;
                })
            }
        </div>

        {/* <br />

        <pre>
            {JSON.stringify(records, null, '\t')}
        </pre> */}
    </>
}