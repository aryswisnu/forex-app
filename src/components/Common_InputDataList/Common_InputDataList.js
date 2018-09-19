import React, { Component } from 'react';

class CommonInputDataList extends Component {
  //set default values
  id = "";
  dataList = [];

  constructor(props) {
    super(props);
    this.handleDataListOptionClicked = this.handleDataListOptionClicked.bind(this);
  }

  initRender() { //change default values to passed props
    if(JSON.stringify(this.props.dataList) !== undefined && JSON.stringify(this.props.dataList) !== JSON.stringify(this.dataList)) {
      this.dataList = this.props.dataList;
    }
  }

  handleDataListOptionClicked(key) {
    if (typeof this.props.onDataListSelected === 'function') {
      this.props.onDataListSelected(key); //callback to parent
    }
  }

  render() {
    this.initRender();

    var renderDataList = () => {
      var dataListContent = [];
      var orderedDataList = this.dataList.sort(); //sort data by alphabetical order
      orderedDataList.forEach((key) => {
        //append to datalist
        dataListContent.push(
          <p key={key} className="datalist-option" onClick={() => {this.handleDataListOptionClicked(key)}}>{key}</p>
        )
      })
      return dataListContent;
    }

    return (
      <div id={this.id} className="datalist-container">
        {Object.keys(this.dataList).length > 0 ?
           renderDataList() : <span className="datalist-option notfound"><i>Not Found</i></span>
         }
        <style>
          {`
            .datalist-container {
              position: absolute;
              margin-top: 31px;
              background-color: white;
              width: 100px;
              border-radius: 4px;
              box-shadow: 0 1px 2px 0 rgba(0,0,0,.15);
              max-height: 180px;
              overflow-y: scroll
            }
            .datalist-container p:hover {
              background-color: lightgrey;
            }
            .datalist-option {
              padding: 10px 20px;
              font-size: 12px;
              cursor: pointer;
              box-sizing: border-box;
              margin: 0;
            }
            .datalist-option.notfound{
              float: left;
              cursor: default;
            }
          `}
        </style>
      </div>
    );
  }
}

export default CommonInputDataList;
