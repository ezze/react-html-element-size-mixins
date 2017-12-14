import htmlElementSize from 'html-element-size';

const HtmlElementHeightMixin = {
    stateElementHeight(stateProperty, element, options) {
        if (element) {
            this.setState({
                [`${stateProperty}`]: htmlElementSize(element, options || {}).height
            });
        }
        else {
            this.setState({
                [`${stateProperty}`]: null
            });
        }
    }
};

export default HtmlElementHeightMixin;
