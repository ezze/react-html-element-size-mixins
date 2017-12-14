import htmlElementSize from 'html-element-size';

const HtmlElementHeightMixin = {
    stateElementWidth(stateProperty, element, options) {
        if (element) {
            this.setState({
                [`${stateProperty}`]: htmlElementSize(element, options || {}).width
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
