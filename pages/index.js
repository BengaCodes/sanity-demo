import { Fragment } from 'react'
import styles from '../styles/Home.module.scss'

export default function Home({data: {dogs}}) {

  const dogsList = dogs

  console.table(dogsList)


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