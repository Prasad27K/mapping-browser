import './App.css';
import React from 'react';
import { Handle } from 'react-flow-renderer';
import ReactFlow, {Controls} from 'react-flow-renderer';
import 'bootstrap-icons/font/bootstrap-icons.css';

const style = {
  width: '100%',
  height: 500,
};

const elements = [
  {
    id: '1',
    type: 'input',
    // type: 'special',
    data: { icon: <i className="bi bi-house-fill"></i>, text: 'Okta' },
    position: { x: 300, y: 200 },
  },
  {
    id: '2',
    type: 'output',
    data: { label: <div className="customNode1">
                      <label className="textField">App1</label>
                      <i className="bi bi-whatsapp"></i>
                    </div> },
    position: { x: 700, y: 80 },
    targetPosition: 'left'
  },
  {
    id: '3',
    type: 'output',
    data: {label: <div className="customNode1">
                    <label className="textField">App2</label>
                    <i className="bi bi-facebook text-info"></i>
                  </div>},
    position: {x: 700, y: 160},
    targetPosition: 'left',
  },
  {
    id: '4',
    type: 'output',
    data: { label: <div className="customNode1">
                      <label className="textField">App3</label>
                      <i className="bi bi-instagram"></i>
                    </div> },
    position: { x: 700, y: 240},
    connectabl: true,
    targetPosition: 'left',
  },
  {
    id: '5',
    type: 'output',
    data: { label: <div className="customNode1">
                      <label className="textField">App4</label>
                      <i className="bi bi-twitter text-info"></i>
                    </div> },
    position: { x: 700, y: 320 },
    connectabl: true,
    targetPosition: 'left',
  },
  {
    id: 'e1a-2',
    source: '1', 
    target: '2',
    type: 'smoothstep',
    animated: true
  },
  {
    id: 'e1a-3',
    source: '1',
    target: '3',
    type: 'smoothstep',
    animated: true,
  },
  {
    id: 'e1a-4',
    source: '1',
    target: '4',
    type: 'smoothstep',
    animated: true,
  },
  {
    id: 'e1a-5',
    source: '1',
    target: '5',
    type: 'smoothstep',
    animated: true,
  }
];

const customNodeStyles = {
  background: '#9CA8B3',
  color: '#FFF',
  padding: 10,
};

const CustomNodeComponent = ({ data }) => {
  return (
    <div className="customNode1">
      <label className="textField">
        {data.text} 
      </label>
      <div>{data.icon}</div>
      {/* <div></div> */}
      <Handle
        type="source"
        position="right"
        id="a"
        style={{ right: '0%', borderRadius: 0 }}
      />
    </div>
  );
};

const nodeTypes = {
  input: CustomNodeComponent
};

export default () => (
  <div style={{ height: 500 }}>
    <ReactFlow elements={elements} style={style} nodeTypes={nodeTypes} >
      <Controls/>
    </ReactFlow>
  </div>
);