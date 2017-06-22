import React from 'react';
import Button from 'zenith-ui/Button';
import Tooltip from 'zenith-ui/Tooltip';
import Card from 'zenith-ui/Card';

export default class Home extends React.Component {

  render() {
    return (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto soluta obcaecati, eligendi repellat adipisci, sapiente deleniti deserunt suscipit laboriosam, minima facere, beatae dolorum esse laudantium cumque laborum reprehenderit eaque quis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut tempora molestiae, error laudantium aliquam eius temporibus iure esse necessitatibus doloremque! Eaque ratione error repellat quaerat dolores accusantium fugiat maxime cupiditate!
        </p>
        <Card title="My Card" description="Card text" />
        {/*<div>
          <Tooltip text="Tooltip top">
            <Button>
              Tooltip position: 'top'
            </Button>
          </Tooltip>
        </div>

        <div>
          <Tooltip text="Tooltip right" position="right">
            <Button>
              Tooltip position: 'right'
            </Button>
          </Tooltip>
        </div>

        <div>
          <Tooltip text="Tooltip bottom" position="bottom">
            <Button>
              Tooltip position: 'bottom'
            </Button>
          </Tooltip>
        </div>

        <div>
          <Tooltip text="Tooltip left" position="left">
            <Button>
              Tooltip position: 'left'
            </Button>
          </Tooltip>
        </div>*/}
      </div>
    );
  }
}
