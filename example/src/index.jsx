/**
 * Created by yan on 16-1-20.
 */
import React from 'react';
import PicUpload from '../../lib/PicUpload';
import 'style!css!../../node_modules/antd/dist/antd.css';
import {render} from 'react-dom';

var element = document.createElement("div");
document.body.appendChild(element);
render(<PicUpload word="反面照" num={1}/>, element);