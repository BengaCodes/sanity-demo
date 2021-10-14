import { Fragment } from 'react'
import styles from '../styles/Home.module.scss'

export default function Home({data}) {
  console.table(data.dogs)



  return (
      <Fragment>

      </Fragment>
  )
}


export function getStaticProps() {
  return {
    props: {
      data: {
        dogs: [{
          name: 'Milo',
          breed: 'Boxer',
          age: 6
        }]
      }
    }
  }
}