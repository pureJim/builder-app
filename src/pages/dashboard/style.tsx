import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  line-height: 1.5;

  .editor-text-strikethrough {
    text-decoration: line-through;
  }

  .editor-text-underline {
    text-decoration: underline;
  }

  .active {
    color: var(--primary-color);
  }

  .ltr {
    text-align: left;
  }

  .rtl {
    text-align: right;
  }

  .editor-placeholder {
    color: #999;
    overflow: hidden;
    position: absolute;
    top: 15px;
    left: 15px;
    user-select: none;
    pointer-events: none;
  }

  .editor-paragraph {
    margin: 0;
    line-height: 22px;
    font-size: 14px;
  }
`;

export const PlaceholderContainer = styled.div``;
