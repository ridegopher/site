import gql from 'graphql-tag'

export const get_athlete_data = gql`
query getAthlete{
  getAthlete(id: 123457) {
	id
	first_name
	last_name
  }
}`
