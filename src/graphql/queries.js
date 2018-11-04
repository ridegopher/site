import gql from 'graphql-tag'

export const get_athlete_data = gql`
query getAthlete{
  getAthlete(id: 22478628) {
	id
	firstname
	lastname
	email
	measurement_preference
	update_description:
	username
	activities{
	  activity_type
	  gear_id
	  name_formats
	  private
	  trainer
	}
	commutes {
	  distance
	  description
	  loc1
	  loc2
	  activities {
	    activity_type
	    gear_id
	    name_formats
	    private
	    trainer
	  }
	}
    locations {
      desc
      cord
    }
  }
}`
