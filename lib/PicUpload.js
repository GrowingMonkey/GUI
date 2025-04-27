'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _style5 = require('antd/lib/modal/style');

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _style6 = require('antd/lib/upload/style');

var _upload = require('antd/lib/upload');

var _upload2 = _interopRequireDefault(_upload);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style7 = require('antd/lib/icon/style');

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _style8 = require('antd/lib/message/style');

var _message = require('antd/lib/message');

var _message2 = _interopRequireDefault(_message);

exports.UploadButton = UploadButton;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NetUitl = require('./NetUitl');

var _NetUitl2 = _interopRequireDefault(_NetUitl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function beforeUpload(file) {
  var isJPG = file.type.indexOf('image') > -1;
  if (!isJPG) {
    _message2.default.error('只能上传图片!');
  }
  var isLt2M = file.size / 1024 / 1024 < 3;
  if (!isLt2M) {
    _message2.default.error('只能上传小于3M的图片!');
  }
  return isJPG && isLt2M;
}
function UploadButton(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_icon2.default, { type: 'plus' }),
    _react2.default.createElement(
      'div',
      { className: 'ant-upload-text' },
      props.word ? props.word : "Upload"
    )
  );
}

var PicUpload = function (_React$Component) {
  (0, _inherits3.default)(PicUpload, _React$Component);

  function PicUpload(props) {
    (0, _classCallCheck3.default)(this, PicUpload);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PicUpload.__proto__ || (0, _getPrototypeOf2.default)(PicUpload)).call(this, props));

    _initialiseProps.call(_this);

    var fileList = _this.props.value ? _this.props.value.map(function (item) {
      return (0, _assign2.default)(item, { uid: item.id ? item.id : item.url });
    }) : [];
    _this.state = {
      fileList: fileList,
      previewVisible: false
    };
    return _this;
  }

  (0, _createClass3.default)(PicUpload, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        fileList: nextProps.value ? nextProps.value.map(function (item) {
          return (0, _assign2.default)(item, { uid: item.id ? item.id : item.url });
        }) : []
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          word = _props.word,
          num = _props.num;

      var fileList = this.state.fileList;
      if (num) fileList = fileList.slice(0, num);
      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          _upload2.default,
          {
            action: '/api/v1/pictures',
            listType: 'picture-card',
            name: 'imgFile',
            fileList: fileList,
            showUploadList: { showPreviewIcon: true, showRemoveIcon: this.props.disabled ? false : true },
            beforeUpload: beforeUpload,
            accept: this.props.accept ? this.props.accept : "image/jpg,image/jpeg,image/png,image/gif",
            multiple: !!this.props.multiple,
            onPreview: this.handlePreview,
            onChange: this.handleChange,
            onRemove: this.handleRemoveImg,
            data: this.props.data
          },
          this.state.fileList.length < num && !this.props.disabled ? _react2.default.createElement(UploadButton, { word: word ? word : "Upload" }) : null
        ),
        _react2.default.createElement(
          _modal2.default,
          { visible: this.state.previewVisible, footer: null, onCancel: this.handleCancel },
          _react2.default.createElement('img', { alt: 'example', style: { width: '100%' }, src: this.state.previewImage })
        )
      );
    }
  }]);
  return PicUpload;
}(_react2.default.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleChange = function (_ref) {
    var file = _ref.file,
        fileList = _ref.fileList;

    if (!file.status) {
      //beforeUpload返回false时也会触发handleChange
      fileList = _this2.state.fileList;
    }
    if (file.status == 'error') {
      _message2.default.error("上传失败，请重试");
      fileList = fileList.filter(function (item) {
        return item.status != "error";
      });
    }
    var list = [];
    fileList.forEach(function (item) {
      if (item.response) {
        if (item.response.status == 10200) {
          list.push((0, _assign2.default)(file.response.data, { uid: file.response.data.id ? file.response.data.id : file.response.data.url }));
        } else {
          _message2.default.error("文件：" + item.name + "上传失败，请重试");
        }
      } else {
        list.push(item);
      }
    });
    _this2.setState({ fileList: list });
    if (list.every(function (item) {
      return !item.status;
    })) {
      _this2.triggerChange(list);
    }
  };

  this.triggerChange = function (fileList) {
    var onChange = _this2.props.onChange;
    var list = fileList.map(function (item) {
      var obj = item.response ? item.response.data : item;
      return obj;
    });
    if (onChange) {
      onChange(list);
    }
  };

  this.handlePreview = function (file) {
    _this2.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };

  this.handleCancel = function () {
    _this2.setState({
      previewVisible: false
    });
  };

  this.handleRemoveImg = function (file) {
    var type = _this2.props.type ? _this2.props.type : "commodities";
    return new _promise2.default(function (resolve, reject) {
      _NetUitl2.default.post('/api/v1/pictures/' + type + '/discard', file, function (res) {
        if (res.status == 10200) {
          resolve(true);
        } else {
          _message2.default.error(res.msg);
          reject('error');
        }
      });
    }).catch(function (error) {
      return false;
    });
  };
};

exports.default = PicUpload;
//# sourceMappingURL=PicUpload.js.map