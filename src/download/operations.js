import gql from 'graphql-tag';

export default gql`
  query($username: String!, $dateStart: DateTime!, $dateEnd: DateTime!) {
    tasks(
      where: {
        user: { name: $username }
        department: { name: "R&D" }
        date_gte: $dateStart
        date_lte: $dateEnd
      }
    ) {
      date
      duration
      description
    }
  }
`;
