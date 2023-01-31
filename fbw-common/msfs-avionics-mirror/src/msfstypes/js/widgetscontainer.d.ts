declare class WidgetsContainer extends UIElement {
    private m_WidgetsListener;
    private get iCurrentPage();
    private m_Header;
    private m_Header_Componenent;
    private m_Container;
    private m_WidgetOpened;
    private virtualScroll;
    private layout;
    private CleanWidgets;
    private getWidgetButtonFromID;
    private ShowWidgetButtons;
    private ShowWidgetButtonsForPage;
    private HideWidgetButtons;
    private HideAllWidgetButtons;
    private OpenPopUp;
    private ClosePopUp;
    private BackPopUp;
    private OnButtonSelected;
    private ShowAllWidgets;
    private SetIsPaused;
    private HideAllWidgets;
    isTransparent(): boolean;
    widgetsCreated: boolean;
    connectedCallback(): void;
    registerWidgetsListener: () => void;
    unregisterWidgetsListener: () => void;
    disconnectedCallback(): void;
    LoadWidgets(src: string): void;
    createHeader: (tag: string, url: string, data: string) => boolean;
    CreateWidgets: (page: WidgetPage) => void;
    onListenerRegistered: () => void;
    private ShowWidgetPage;
    private upateWidgetsState;
    private _AddWidget;
    AddWidget(widgetInfo: Widget): void;
    private AddHeaderCB;
    private RemoveHeaderCB;
    private AddWidgetCB;
    private getPageFootprintLines;
    private getPageFootprintColumns;
    private RecomputeLayout;
    get currentButtonNumber(): number;
    get buttonsCount(): number;
    getKeyNavigationDirection(): KeyNavigationDirection;
    private UpdateWidgetDataCB;
    private UpdateWidgetTagsCB;
    TestWidgets(): void;
    PreviousPage(): Boolean;
    NextPage(): boolean;
    ShowPage: (index: number) => void;
}