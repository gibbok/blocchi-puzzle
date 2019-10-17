import * as React from 'react';
import { InternalState } from './types';
import { connect } from 'react-redux';

const Board = (state: InternalState) => <div>{JSON.stringify(state)}</div>;

const mapStateToProps = (state: InternalState) => state;

export const BoardContainer = connect(mapStateToProps)(Board);
