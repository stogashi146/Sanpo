import { Redirect } from 'expo-router'
import { path } from '../path'

const Index = (): JSX.Element => {
  return <Redirect href={path.themeLists} />
}

export default Index
