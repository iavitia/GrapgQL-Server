import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { Container } from '../atoms';
import { Grid } from 'semantic-ui-react';
import { TimelineCard } from '../organisms';
import { Loading } from '../molecules';
import FETCH_TIMELINES_QUERY from '../../mutations/fetchTimelines';

export default function () {
  let timelines = '';
  const { loading, data } = useQuery(FETCH_TIMELINES_QUERY);

  if (data) timelines = { data: data.getTimelines };

  return (
    <Container navpadding='true'>
      <Grid columns={3}>
        <Grid.Row>
          <h1>Recent Timelines</h1>
        </Grid.Row>

        <Grid.Row>
          {loading ? (
            <Loading />
          ) : (
            timelines.data &&
            timelines.data.map((timeline) => (
              <Grid.Column key={timeline.id} style={{ marginBottom: '20px' }}>
                <TimelineCard timeline={timeline} />
              </Grid.Column>
            ))
          )}
        </Grid.Row>
      </Grid>
    </Container>
  );
}
