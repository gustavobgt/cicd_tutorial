import React from 'react'
import Grid from "@mui/material/Grid";

import Link from "@mui/material/Link";

export function Footer(props) {
  const { text } = props;

  return (
    <Grid container>
      <Grid item xs>
        <Link href="#" variant="body2">
          {text}
        </Link>
      </Grid>
    </Grid>
  );
}